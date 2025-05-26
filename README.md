# Thynkr Frontend

Thynkr is a modern platform for sharing, discovering, and collaborating on innovative ideas. This repository contains the frontend codebase built with **React**, **Tailwind CSS**, and **shadcn/ui** components.

---

## 🚀 Features

- **Authentication**: Firebase Google Auth login/signup (with route protection)
- **User Profiles**: View your own and other users’ profiles, including their ideas
- **Ideas Feed**: Browse all ideas on the Home page
- **Idea Details**: View detailed information about each idea
- **Post Ideas**: Authenticated users can post new ideas with images, categories, and pitches
- **Delete Ideas**: Idea owners can delete their own ideas
- **Responsive UI**: Fully responsive and accessible design
- **Modern UI**: Uses Google Fonts (Poppins, Inter, Lato) and beautiful gradients

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) (state management)
- [react-hook-form](https://react-hook-form.com/) (form handling)
- [react-hot-toast](https://react-hot-toast.com/) (notifications)
- [Axios](https://axios-http.com/) (API requests)

---

## 📁 Project Structure

```
src/
  comman/           # Shared UI components (Navbar, IdeaCard, Skeletons, etc.)
  components/ui/    # shadcn/ui components
  Layout/           # App layout
  pages/            # Page components (Home, Idea, Profile, Post, User)
  route-guards/     # ProtectedRoute and other guards
  store/            # Zustand stores (auth, user, idea)
  utils/            # Utility functions (dateFormat, etc.)
  App.jsx           # Main app entry
  index.js          # ReactDOM entry
```

---

## 🧑‍💻 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/thynkr-frontend.git
   cd thynkr-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   - Create a `.env` file and add the following fields:

   ```
   VITE_MODE=development
   VITE_BACKEND_URL=your_backend_url

   VITE_API_KEY=
   VITE_AUTH_DOMAIN=
   VITE_PROJECT_ID=
   VITE_STORAGE_BUCKET=
   VITE_MESSAGE_SENDER_ID=
   VITE_APP_ID=""
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in your browser**

   ```
   http://localhost:5173
   ```

---

## 🔒 Authentication

- Firebase Google Auth is used for authentication.
- Protected routes (like `/profile` and `/post`) require login.
- Auth state is managed with Zustand and checked on app load.

---

## 📦 API Integration

- All API requests are made via Axios.
- The backend should expose endpoints for authentication, user info, and ideas (see `/store` and `/utils/axiosInstance.js`).

---

## 🎨 Customization

- Fonts: [Poppins](https://fonts.google.com/specimen/Poppins) (headings), [Inter](https://fonts.google.com/specimen/Inter) (paragraphs), [Lato](https://fonts.google.com/specimen/Lato) (buttons)
- Easily customizable via Tailwind config and component props.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**Made with ❤️ for innovators by the Thynkr team.**

---

## 📬 Contact

- **LinkedIn:** [Harshit Parmar](https://www.linkedin.com/in/harshit-parmar-47253b282/)
- **Email:** parmarharshit441@gmail.com