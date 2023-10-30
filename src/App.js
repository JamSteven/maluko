import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import TShirtDisplay from "./components/TShirtDisplay"
import CollectionPage from "./components/CollectionPage"
import Navbar from "./components/Navbar"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import HomePage from "./components/HomePage"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personalisation" element={<TShirtDisplay />} />
          <Route path="/collection" element={<CollectionPage />} />
          {/* Vous pouvez ajouter d'autres routes ici selon vos besoins */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
