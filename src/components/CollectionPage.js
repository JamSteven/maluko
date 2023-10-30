import React from "react"
import "./CollectionPage.css"

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context("../assets/collection", false, /\.(jpg)$/)
)

const CollectionPage = () => {
  return (
    <div className="collection-page">
      <h1>Nos Collections</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="item-wrapper" key={index}>
            <img src={image} alt={`Collection ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
