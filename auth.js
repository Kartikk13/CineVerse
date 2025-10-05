// Authentication Management
let currentUser = null;
let isLoginMode = true;

// Initialize auth state on load
function initAuth() {
    loadUserData();
}

// Load saved user data from sessionStorage
function loadUserData() {
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Update UI based on auth state
function updateAuthUI() {
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (currentUser) {
        authBtn.classList.add('hidden');
        logoutBtn.classList.remove('hidden');
    } else {
        authBtn.classList.remove('hidden');
        logoutBtn.classList.add('hidden');
    }
}

// Open authentication modal
function openAuthModal() {
    document.getElementById('authModal').style.display = 'block';
}

// Close authentication modal
function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.getElementById('authForm').reset();
}

// Toggle between login and signup modes
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('authTitle').textContent = isLoginMode ? 'Sign In' : 'Sign Up';
    document.getElementById('authSwitchText').innerHTML = isLoginMode 
        ? 'Don\'t have an account? <a id="authSwitchLink">Sign Up</a>'
        : 'Already have an account? <a id="authSwitchLink">Sign In</a>';
    
    // Re-attach event listener to new switch link
    document.getElementById('authSwitchLink').addEventListener('click', toggleAuthMode);
}

// Handle authentication form submission
function handleAuth(e) {
    e.preventDefault();
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;

    // Validate password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    // Create/login user
    currentUser = { email };
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateAuthUI();
    closeAuthModal();
    
    // Reload watchlist for this user
    loadWatchlist();
    
    // Show success message
    alert(isLoginMode ? 'Welcome back!' : 'Account created successfully!');
    
    // Refresh current page
    const currentPage = getCurrentPage();
    if (currentPage === 'watchlist') {
        loadPage('watchlist');
    }
}

// Logout user
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        currentUser = null;
        sessionStorage.removeItem('currentUser');
        updateAuthUI();
        
        // Navigate to home page
        navigateTo('home');
    }
}

// Check if user is authenticated
function requireAuth() {
    if (!currentUser) {
        alert('Please sign in to access this feature');
        openAuthModal();
        return false;
    }
    return true;
}

// Initialize auth event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Auth form submission
    document.getElementById('authForm').addEventListener('submit', handleAuth);
    
    // Auth mode switch
    document.getElementById('authSwitchLink').addEventListener('click', toggleAuthMode);
    
    // Initialize auth state
    initAuth();
});