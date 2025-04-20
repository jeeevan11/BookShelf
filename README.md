# BookDB - Your Ultimate Book Discovery Platform

BookDB is a modern web application that helps users discover, rate, and review books. Similar to IMDB but for books, it provides a comprehensive platform for book enthusiasts to explore new titles, manage their reading lists, and share their thoughts with the community.

## 🚀 Features

- 🏠 **Home Page**: Featured books and recommendations
- 🔍 **Advanced Search**: Search books by title, author, or ISBN
- ⭐ **Book Details**: View comprehensive book information
- ❤️ **Favorites**: Save and manage your favorite books
- 📱 **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (Functional Components + Hooks)
- **Routing**: React Router v6
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **API Integration**: Google Books API
- **Version Control**: Git & GitHub

## 📦 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── BookCard.jsx
│   ├── Layout.jsx
│   └── ...
├── pages/         # Page components
│   ├── Home.jsx
│   ├── Search.jsx
│   └── Favorites.jsx
├── context/       # Context providers
│   └── BookContext.jsx
├── hooks/         # Custom hooks
├── utils/         # Utility functions
└── assets/        # Static assets
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bookdb.git
   cd bookdb
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   VITE_GOOGLE_BOOKS_API_URL=https://www.googleapis.com/books/v1/volumes
   VITE_GOOGLE_BOOKS_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📝 Key Features Implementation

- **State Management**: Using React Context API for global state
- **Form Validation**: Search form with input validation
- **API Integration**: Google Books API for real book data
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Local Storage**: Persistent storage for favorites

## 🎯 Project Requirements Met

- ✅ React.js with Functional Components + Hooks
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Tailwind CSS for styling
- ✅ Git & GitHub for version control
- ✅ 3+ pages/routes
- ✅ State management across components
- ✅ Props, conditional rendering, lists, and forms
- ✅ Form validation
- ✅ API integration
- ✅ Responsive design
- ✅ Modular folder structure
- ✅ Clean and well-commented code
- ✅ Environment variables
- ✅ Reusable components
- ✅ No hard-coded values



