import React, { useState, useCallback } from "react"
import "./TShirtDisplay.css"

function importAll(r) {
  return r.keys().map(r)
}

const shirts = importAll(
  require.context("../assets/tshirtcouleur", false, /\.(png|jpe?g|svg)$/)
)

function TShirtDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [logo, setLogo] = useState(null)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [rotation, setRotation] = useState(0)
  const [size, setSize] = useState(100)
  const [isDragging, setIsDragging] = useState(false)
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 })

  const handleImageUpload = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setLogo(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleShirtChange = (direction) => {
    const newIndex = (currentIndex + direction + shirts.length) % shirts.length
    setCurrentIndex(newIndex)
  }

  const handleMouseDown = (event) => {
    setIsDragging(true)
    setStartPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  const handleMouseMove = (event) => {
    if (!isDragging) return
    const dx = event.clientX - startPosition.x
    const dy = event.clientY - startPosition.y
    setPosition((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }))
    setStartPosition({
      x: event.clientX,
      y: event.clientY,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Composant pour l'affichage des t-shirts
  const ShirtImage = ({ src, alt, onClick, style }) => (
    <img src={src} alt={alt} onClick={onClick} style={style} />
  )

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <ShirtImage
          src={shirts[(currentIndex - 1 + shirts.length) % shirts.length]}
          alt="Previous T-Shirt"
          style={{ width: "50px", opacity: 0.5, cursor: "pointer" }}
          onClick={() => handleShirtChange(-1)}
        />

        <ShirtImage
          src={shirts[currentIndex]}
          alt="Current T-Shirt"
          style={{ width: "300px", position: "relative" }}
        />

        {logo && (
          <img
            src={logo}
            alt="Logo"
            style={{
              position: "absolute",
              maxWidth: `${size}px`,
              top: `${position.y}px`,
              left: `${position.x}px`,
              transform: `rotate(${rotation}deg)`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        )}

        <ShirtImage
          src={shirts[(currentIndex + 1) % shirts.length]}
          alt="Next T-Shirt"
          style={{ width: "50px", opacity: 0.5, cursor: "pointer" }}
          onClick={() => handleShirtChange(1)}
        />
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files)}
        style={{ margin: "10px 0" }}
      />

      <div style={{ display: "flex", overflow: "scroll", width: "350px" }}>
        {shirts.map((shirt, index) => (
          <ShirtImage
            key={index}
            src={shirt}
            alt={`T-Shirt ${index}`}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: "50px",
              margin: "0 10px",
              cursor: "pointer",
              opacity: currentIndex === index ? 1 : 0.5,
            }}
          />
        ))}
      </div>

      <div style={{ flex: "1", padding: "20px" }}>
        <h3>Toolbox</h3>
        <label>
          Position X:
          <input
            type="range"
            value={position.x}
            min="0"
            max="100"
            onChange={(e) =>
              setPosition((prev) => ({
                ...prev,
                x: parseFloat(e.target.value),
              }))
            }
          />
        </label>
        <br />
        <label>
          Position Y:
          <input
            type="range"
            value={position.y}
            min="0"
            max="100"
            onChange={(e) =>
              setPosition((prev) => ({
                ...prev,
                y: parseFloat(e.target.value),
              }))
            }
          />
        </label>
        <br />
        <label>
          Rotation:
          <input
            type="range"
            value={rotation}
            min="0"
            max="360"
            onChange={(e) => setRotation(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label>
          Size:
          <input
            type="range"
            value={size}
            min="50"
            max="300"
            onChange={(e) => setSize(parseFloat(e.target.value))}
          />
        </label>
      </div>
    </div>
  )
}

export default TShirtDisplay
