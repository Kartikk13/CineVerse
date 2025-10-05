// Application State
let watchlist = [];
let currentPage = 1;
let itemsPerPage = 8;
let filteredMovies = [...moviesData];
let currentRoute = 'home';

// Initialize Application
function initApp() {
    loadWatchlist();
    setupEventListeners();
    loadPage('home');
}

// Setup Event Listeners
function setupEventListeners() {
    // Close modals on outside click
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
}

// Load watchlist from storage
function loadWatchlist() {
    if (currentUser) {
        const savedWatchlist = sessionStorage.getItem(`watchlist_${currentUser.email}`);
        if (savedWatchlist) {
            watchlist = JSON.parse(savedWatchlist);
        } else {
            watchlist = [];
        }
    } else {
        watchlist = [];
    }
}

// Save watchlist to storage
function saveWatchlist() {
    if (currentUser) {
        sessionStorage.setItem(`watchlist_${currentUser.email}`, JSON.stringify(watchlist));
    }
}

// Get current page
function getCurrentPage() {
    return currentRoute;
}

// Navigation
function navigateTo(page) {
    currentRoute = page;
    loadPage(page);
}

// Load page content
function loadPage(page) {
    const mainContent = document.getElementById('mainContent');
    
    switch(page) {
        case 'home':
            mainContent.innerHTML = getHomePageHTML();
            initHomePage();
            break;
        case 'watchlist':
            if (!requireAuth()) return;
            mainContent.innerHTML = getWatchlistPageHTML();
            renderWatchlist();
            break;
        case 'error':
            mainContent.innerHTML = getErrorPageHTML();
            break;
        default:
            mainContent.innerHTML = getErrorPageHTML();
    }
}

// Get Home Page HTML
function getHomePageHTML() {
    return `
        <section class="hero">
            <h1>Discover Amazing Content</h1>
            <p>Explore thousands of movies, series, and anime</p>
        </section>

        <section class="search-section">
            <div class="search-bar">
                <input type="text" id="searchInput" class="search-input" placeholder="Search for movies, series, anime...">
            </div>
            <div class="filters">
                <select id="typeFilter">
                    <option value="all">All Types</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                    <option value="anime">Anime</option>
                </select>
                <select id="genreFilter">
                    <option value="all">All Genres</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror</option>
                    <option value="sci-fi">Sci-Fi</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="fantasy">Fantasy</option>
                </select>
                <select id="sortFilter">
                    <option value="rating-desc">Rating: High to Low</option>
                    <option value="rating-asc">Rating: Low to High</option>
                    <option value="year-desc">Year: Newest First</option>
                    <option value="year-asc">Year: Oldest First</option>
                </select>
            </div>
        </section>

        <div id="moviesContainer">
            <div class="loading">
                <div class="spinner"></div>
                <p>Loading amazing content...</p>
            </div>
        </div>

        <div id="pagination" class="pagination hidden"></div>
    `;
}

// Get Watchlist Page HTML
function getWatchlistPageHTML() {
    return `
        <section class="hero">
            <h1>My Watchlist</h1>
            <p>Your personal collection of must-watch content</p>
        </section>
        <div id="watchlistContainer"></div>
    `;
}

// Get Error Page HTML
function getErrorPageHTML() {
    return `
        <div class="error-page">
            <h1>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <button class="btn btn-primary" onclick="navigateTo('home')">Go Home</button>
        </div>
    `;
}

// Initialize Home Page
function initHomePage() {
    // Setup event listeners for search and filters
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('typeFilter').addEventListener('change', applyFilters);
    document.getElementById('genreFilter').addEventListener('change', applyFilters);
    document.getElementById('sortFilter').addEventListener('change', applyFilters);
    
    // Initial render
    setTimeout(() => {
        renderMovies();
    }, 500);
}

// Handle Search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filteredMovies = moviesData.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    applyFilters();
}

// Apply Filters
function applyFilters() {
    const type = document.getElementById('typeFilter').value;
    const genre = document.getElementById('genreFilter').value;
    const sort = document.getElementById('sortFilter').value;

    let filtered = [...filteredMovies];

    // Filter by type
    if (type !== 'all') {
        filtered = filtered.filter(movie => movie.type === type);
    }

    // Filter by genre
    if (genre !== 'all') {
        filtered = filtered.filter(movie => movie.genre === genre);
    }

    // Sort
    const [sortBy, order] = sort.split('-');
    filtered.sort((a, b) => {
        if (sortBy === 'rating') {
            return order === 'desc' ? b.rating - a.rating : a.rating - b.rating;
        } else if (sortBy === 'year') {
            return order === 'desc' ? b.year - a.year : a.year - b.year;
        }
        return 0;
    });

    filteredMovies = filtered;
    currentPage = 1;
    renderMovies();
}

// Render Movies
function renderMovies() {
    const container = document.getElementById('moviesContainer');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const moviesToShow = filteredMovies.slice(startIndex, endIndex);

    if (moviesToShow.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No content found</h3>
                <p>Try adjusting your filters or search term</p>
            </div>
        `;
        document.getElementById('pagination').classList.add('hidden');
        return;
    }

    container.innerHTML = `
        <div class="movies-grid">
            ${moviesToShow.map(movie => createMovieCard(movie)).join('')}
        </div>
    `;

    renderPagination();
}

// Create Movie Card
function createMovieCard(movie) {
    const isInWatchlist = watchlist.some(item => item.id === movie.id);
    return `
        <div class="movie-card" onclick="showMovieDetail(${movie.id})">
            <button class="watchlist-btn ${isInWatchlist ? 'active' : ''}" 
                    onclick="event.stopPropagation(); toggleWatchlist(${movie.id})">
                ${isInWatchlist ? '✓' : '+'}
            </button>
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="rating">⭐ ${movie.rating}</span>
                    <span>${movie.year}</span>
                </div>
            </div>
        </div>
    `;
}

// Render Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    
    if (totalPages <= 1) {
        document.getElementById('pagination').classList.add('hidden');
        return;
    }

    document.getElementById('pagination').classList.remove('hidden');
    
    let paginationHTML = `
        <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ← Prev
        </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<button disabled>...</button>';
        }
    }

    paginationHTML += `
        <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Next →
        </button>
    `;

    document.getElementById('pagination').innerHTML = paginationHTML;
}

// Change Page
function changePage(page) {
    currentPage = page;
    renderMovies();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Watchlist
function toggleWatchlist(movieId) {
    if (!requireAuth()) return;

    const movie = moviesData.find(m => m.id === movieId);
    const index = watchlist.findIndex(item => item.id === movieId);

    if (index > -1) {
        watchlist.splice(index, 1);
    } else {
        watchlist.push(movie);
    }

    saveWatchlist();
    
    // Refresh current view
    if (currentRoute === 'watchlist') {
        renderWatchlist();
    } else {
        renderMovies();
    }
}

// Render Watchlist
function renderWatchlist() {
    const container = document.getElementById('watchlistContainer');

    if (watchlist.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Your watchlist is empty</h3>
                <p>Add some movies, series, or anime to get started!</p>
                <button class="btn btn-primary" onclick="navigateTo('home')">Browse Content</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="movies-grid">
            ${watchlist.map(movie => createMovieCard(movie)).join('')}
        </div>
    `;
}

// Show Movie Detail Modal
function showMovieDetail(movieId) {
    const movie = moviesData.find(m => m.id === movieId);
    const isInWatchlist = watchlist.some(item => item.id === movie.id);

    const detailContent = `
        <div class="detail-hero">
            <img src="${movie.poster}" alt="${movie.title}" class="detail-backdrop">
            <div class="detail-overlay">
                <h1 class="detail-title">${movie.title}</h1>
                <div class="detail-meta">
                    <span>⭐ ${movie.rating}</span>
                    <span>${movie.year}</span>
                    <span>${movie.type.toUpperCase()}</span>
                </div>
            </div>
        </div>
        <div class="detail-body">
            <div class="detail-section">
                <h3>Overview</h3>
                <p>${movie.description}</p>
            </div>
            <div class="detail-section">
                <h3>Genre</h3>
                <div class="genre-tags">
                    <span class="genre-tag">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</span>
                </div>
            </div>
            <div class="detail-section">
                <button class="btn ${isInWatchlist ? 'btn-outline' : 'btn-primary'}" 
                        onclick="toggleWatchlist(${movie.id}); showMovieDetail(${movie.id})">
                    ${isInWatchlist ? '✓ In Watchlist' : '+ Add to Watchlist'}
                </button>
            </div>
        </div>
    `;

    document.getElementById('detailContent').innerHTML = detailContent;
    document.getElementById('detailModal').style.display = 'block';
}

// Close Detail Modal
function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});