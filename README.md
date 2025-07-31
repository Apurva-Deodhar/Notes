This is a Notes Web Application built using the MERN Stack — MongoDB, Express.js, React, and Node.js. It allows users to add, update, and delete notes easily in a clean and responsive user interface.

🚀 Features
✅ Add a new note

♻️ Update an existing note

❌ Delete a note

🛠️ Technologies Used
MERN Stack:
1) MongoDB
MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is ideal for applications requiring fast, scalable, and schema-less storage.

2) Express.js
Express.js is a lightweight and flexible Node.js web application framework that provides a robust set of features for building APIs and web servers.

3) Node.js
Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows running JavaScript on the server-side and is widely used for building fast and scalable backend services.

4) React
React is a powerful front-end JavaScript library for building user interfaces. It uses component-based architecture and a virtual DOM to efficiently update and render UI elements.

📦 Additional Libraries
Axios – For making HTTP requests from the frontend to the backend.
Hot Toast – For displaying beautiful and responsive toast notifications.
Lucide – An icon library used for adding elegant and consistent icons to the UI.
Tailwind CSS – A utility-first CSS framework used to design and style the frontend efficiently and responsively

📁 Project Structure
backend/
└── src/
    ├── server.js              # Entry point
    ├── config/                # MongoDB connection and config
    ├── models/                # Mongoose schemas
    ├── controllers/           # Route handler logic
    ├── middleware/            # Custom middleware
    └── NotesRoute/            # Route definitions
frontend/
├── public/
│   └── index.html             # Root HTML file
├── src/
│   ├── App.jsx                # Root React component
│   ├── main.jsx               # Entry point for React DOM rendering
│   ├── index.css              # Global styles
│   ├── pages/                 # Page components
│   ├── components/            # Reusable UI components
│   └── lib/                   # Utility functions/config
├── package.json               # Frontend dependencies
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS plugins (used by Tailwind)
├── vite.config.js             # Vite build tool config
└── README.md


🧑‍💻 Setup Instructions
- Clone the repository
- Run npm install in both the /backend and /frontend directories
- Set up your .env file in the backend (include your MongoDB URI)
- Start the backend server from root folder : npm start
- Start the frontend server: npm run dev or npm start
