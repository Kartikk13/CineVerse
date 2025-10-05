# CineVerse
# 🎬 CineVerse - Movie & Anime Hub

A beautiful, feature-rich web application for browsing and managing your favorite movies, TV series, and anime. Built with pure HTML, CSS, and JavaScript with a modular file structure.

![CineVerse](https://img.shields.io/badge/Version-1.0.0-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📁 Project Structure

```
cineverse/
│
├── index.html          # Main HTML file with page structure
├── style.css           # All styles and animations
├── data.js             # Movie/Series/Anime data
├── auth.js             # Authentication logic
├── app.js              # Main application logic
└── README.md           # This file
```

### File Descriptions

| File | Description |
|------|-------------|
| **index.html** | Main entry point with page structure, modals, and navigation |
| **style.css** | Complete styling including responsive design and animations |
| **data.js** | Movie database with 30 items (movies, series, anime) |
| **auth.js** | User authentication and session management |
| **app.js** | Core application logic, routing, filtering, and rendering |

## ✨ Features

### 🔐 Authentication System
- **Sign Up / Sign In**: Create an account or log in to access personalized features
- **Session Management**: User data persists during the session using sessionStorage
- **Secure Password Validation**: Minimum 6 characters required
- **Logout Functionality**: Clean session termination

### 🎯 Content Browsing
- **30+ Movies, Series & Anime**: Curated collection with real poster images
- **Responsive Grid Layout**: Adapts to all screen sizes seamlessly
- **Beautiful Card Design**: Hover effects and smooth animations
- **High-Quality Posters**: Using TMDB (The Movie Database) images

### 🔍 Advanced Filtering & Sorting
- **Search Bar**: Real-time search by title
- **Type Filter**: Filter by Movies, Series, or Anime
- **Genre Filter**: 8 genres including Action, Comedy, Drama, Horror, Sci-Fi, Romance, Thriller, and Fantasy
- **Sort Options**: 
  - Rating: High to Low / Low to High
  - Year: Newest First / Oldest First

### 📄 Pagination
- **Frontend Pagination**: 8 items per page for optimal viewing
- **Page Navigation**: Previous/Next buttons with page numbers
- **Smart Pagination**: Shows current page, adjacent pages, and ellipsis for skipped pages
- **Smooth Scrolling**: Auto-scroll to top on page change

### 📝 Detailed Information Modal
- **Full Movie Details**: Title, rating, year, type, and description
- **Large Backdrop Image**: Immersive visual experience
- **Genre Tags**: Beautiful tag display
- **Quick Actions**: Add to watchlist directly from modal
- **Close on Outside Click**: User-friendly modal behavior

### ⭐ Watchlist Management
- **Personal Collection**: Save your favorite content
- **Quick Add/Remove**: One-click watchlist toggle from any page
- **Visual Indicators**: Clear UI showing watchlist status
- **User-Specific**: Each user has their own watchlist
- **Persistent Storage**: Watchlist saved in sessionStorage

### 🎨 Design & UI/UX
- **Modern Dark Theme**: Eye-friendly dark color scheme
- **Gradient Accents**: Purple and pink gradient highlights
- **Glassmorphism Effects**: Frosted glass blur effects
- **Smooth Animations**: 60fps transitions and hover effects
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Loading States**: Spinner animation while content loads
- **Empty States**: Helpful messages for empty watchlist/search results

### 🚫 Error Handling
- **404 Error Page**: Beautiful error page with navigation back home
- **Form Validation**: Email and password validation
- **Authentication Guards**: Redirect to login when accessing protected features
- **User Feedback**: Alerts and visual feedback for actions

## 📖 Usage Guide

### 1️⃣ Getting Started
1. Open the application in your browser
2. Click **"Sign In"** button in the top navigation
3. Create an account or log in with existing credentials
4. Start exploring content!

### 2️⃣ Browsing Content
- **Search**: Type in the search bar to find specific titles
- **Filter by Type**: Select Movies, Series, or Anime from the dropdown
- **Filter by Genre**: Choose from 8 different genres
- **Sort**: Organize by rating or release year
- **Pagination**: Navigate through pages using the controls at the bottom

### 3️⃣ Viewing Details
- Click on any movie/series/anime card
- A modal will appear with full details
- View poster, rating, year, type, genre, and description
- Add to watchlist directly from the modal

### 4️⃣ Managing Watchlist
- Click the **"+"** button on any card to add to watchlist
- Button changes to **"✓"** when added
- Click **"Watchlist"** in navigation to view your collection
- Remove items by clicking the **"✓"** button again

### 5️⃣ Logging Out
- Click the **"Logout"** button in the top right
- Your session will end and you'll return to the home page
- Your watchlist is saved and will be restored when you log back in

## 🛠️ Technical Details

### File Architecture

#### **index.html**
- Main HTML structure
- Navigation header
- Modal components (Auth & Details)
- Script imports

#### **style.css**
- CSS custom properties for theming
- Responsive grid layouts
- Animation keyframes
- Modal styling
- Media queries for responsiveness

#### **data.js**
- Movie/Series/Anime database (30 items)
- Data structure with all content properties
- Exported as `moviesData` array

#### **auth.js**
- User authentication logic
- Login/Signup functionality
- Session management
- Auth state persistence
- User validation

#### **app.js**
- Main application controller
- Page routing and navigation
- Movie filtering and sorting
- Pagination logic
- Watchlist management
- Modal handling
- Event listeners

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with animations
- **Vanilla JavaScript**: No frameworks or libraries
- **sessionStorage API**: Client-side data persistence

### Browser Storage
The application uses **sessionStorage** for:
- User authentication state
- Watchlist data per user
- Session persistence during browser tab lifetime

**Note**: Data is cleared when the browser tab is closed.

### Data Structure

```javascript
// Movie Object
{
  id: Number,
  title: String,
  type: "movie" | "series" | "anime",
  genre: String,
  year: Number,
  rating: Number (0-10),
  poster: String (URL),
  description: String
}

// User Object
{
  email: String
}

// Watchlist: Array of Movie Objects
```

### Key Functions by File

#### **auth.js**
| Function | Description |
|----------|-------------|
| `initAuth()` | Initializes authentication state |
| `loadUserData()` | Loads user from sessionStorage |
| `handleAuth()` | Handles login/signup |
| `logout()` | Logs out current user |
| `requireAuth()` | Checks authentication status |

#### **app.js**
| Function | Description |
|----------|-------------|
| `initApp()` | Initializes the application |
| `navigateTo()` | Handles page navigation |
| `loadPage()` | Loads page content |
| `applyFilters()` | Filters and sorts content |
| `renderMovies()` | Displays movie grid |
| `toggleWatchlist()` | Adds/removes from watchlist |
| `showMovieDetail()` | Opens detail modal |
| `changePage()` | Handles pagination |

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary: #6366f1;        /* Primary brand color */
    --secondary: #ec4899;      /* Secondary accent color */
    --dark: #0f172a;           /* Background color */
    --text: #f1f5f9;           /* Text color */
}
```

### Adding More Movies
Add objects to the `moviesData` array in `data.js`:

```javascript
{
    id: 31,
    title: "Your Movie",
    type: "movie",
    genre: "action",
    year: 2024,
    rating: 8.5,
    poster: "https://image.url",
    description: "Description here"
}
```

### Adjusting Items Per Page
Change the `itemsPerPage` variable in `app.js`:

```javascript
let itemsPerPage = 12; // Show 12 items per page
```

### Adding New Genres
1. Add option in `index.html` genre filter:
```html
<option value="adventure">Adventure</option>
```

2. Add movies with that genre in `data.js`

### Modifying Animations
Edit animation keyframes in `style.css`:

```css
@keyframes customAnimation {
    from { /* start state */ }
    to { /* end state */ }
}
```

## 🔮 Future Enhancements

### Short-term
- [ ] Add localStorage option for persistent data
- [ ] Implement advanced search (multi-field)
- [ ] Add user ratings
- [ ] Theme switcher (dark/light mode)

### Medium-term
- [ ] Integration with real movie database APIs (TMDB, OMDB)
- [ ] Video trailer integration
- [ ] Social sharing features
- [ ] User reviews and comments

### Long-term
- [ ] Backend implementation with user database
- [ ] Real authentication with JWT
- [ ] User profile customization
- [ ] Recommendation system
- [ ] Multiple language support
- [ ] PWA (Progressive Web App) support

## 📄 License

This project is free to use for educational and personal purposes.

**Note**: Movie posters and data are from TMDB and are for demonstration purposes only. For commercial use, please ensure proper licensing and use your own data source.

## 🙏 Acknowledgments

- **TMDB (The Movie Database)**: For movie poster images
- **Google Fonts**: For beautiful typography
- **Inspiration**: Modern streaming platforms like Netflix, Disney+, and Crunchyroll

## 🆘 Troubleshooting

### Common Issues

**Problem**: Images not loading
- **Solution**: Check internet connection, TMDB may be blocking requests

**Problem**: Watchlist not saving
- **Solution**: Ensure you're logged in and check browser's sessionStorage settings

**Problem**: Filters not working
- **Solution**: Clear browser cache and reload, check console for errors

**Problem**: Page not loading correctly
- **Solution**: Ensure all files are in the same directory and properly linked

**Problem**: Styles not applying
- **Solution**: Verify `style.css` is in the same folder as `index.html`


### Performance Tips
- Use a local server instead of opening HTML directly
- Clear sessionStorage if experiencing issues
- Disable browser extensions if having conflicts
- Use incognito mode for clean testing


## 🌟 Features Checklist

- [x] User authentication (Sign up/Sign in)
- [x] Session management
- [x] Movie/Series/Anime browsing
- [x] Search functionality
- [x] Filter by type and genre
- [x] Sort by rating and year
- [x] Detailed information modal
- [x] Watchlist management
- [x] Pagination
- [x] Responsive design
- [x] Error page (404)
- [x] Loading states
- [x] Empty states
- [x] Beautiful animations
- [x] Modular file structure

## 📊 Project Stats

- **Total Files**: 5 (HTML, CSS, 3x JS)
- **Total Movies**: 30
- **Lines of Code**: ~1,500+
- **Dependencies**: 0 (Pure vanilla JS)
- **Supported Devices**: All (Responsive)

---

*Happy Watching! 🍿*

