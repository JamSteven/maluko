import React from "react"
import PropTypes from "prop-types" // Si vous n'avez pas déjà installé 'prop-types', faites-le avec npm ou yarn.

// Fichier CSS pour le style du composant
import "./TshirtCompany.css"

const TShirtCompany = ({ images, onDesignButtonClick }) => {
  return (
    <div className="tshirt-company">
      <h1>Ma Société de T-Shirts Personnalisables</h1>
      <p>
        Nous offrons des t-shirts de haute qualité que vous pouvez personnaliser
        selon vos désirs !
      </p>

      <div className="showcase">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`T-shirt exemple ${index + 1}`} />
        ))}
      </div>

      <p>Commencez dès maintenant et créez le t-shirt de vos rêves !</p>
      <button className="start-design" onClick={onDesignButtonClick}>
        Commencer la conception
      </button>
    </div>
  )
}

TShirtCompany.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDesignButtonClick: PropTypes.func,
}

TShirtCompany.defaultProps = {
  onDesignButtonClick: () => {
    console.log(
      "Bouton de conception cliqué ! Redirigez vers la page de conception ou affichez une modale."
    )
  },
}

export default TShirtCompany
