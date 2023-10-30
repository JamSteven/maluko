import React from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom" // Importez useNavigate
import "./HomePage.css"

const HomePage = ({ images }) => {
  const navigate = useNavigate() // Utilisez le hook useNavigate

  return (
    <div className="home-page">
      <h1>Bienvenue chez Maluko T-Shirts</h1>
      <p>
        Explorez notre gamme exclusive de t-shirts personnalisables et créez un
        design unique qui vous ressemble !
      </p>

      <div className="showcase">
        {images &&
          images.map((image, index) => (
            <img key={index} src={image} alt={`T-shirt exemple ${index + 1}`} />
          ))}
      </div>

      <p>Envie de créer votre propre t-shirt ? C'est parti !</p>
      <button
        className="start-design"
        onClick={() => navigate("/personalisation")}
      >
        {" "}
        {/* Mettez à jour la fonction onClick */}
        Personnaliser mon T-shirt
      </button>
    </div>
  )
}

HomePage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

export default HomePage
