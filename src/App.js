import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
     <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <nav>
        <h1>CRUD React and SuperBase</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Fast execution</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
