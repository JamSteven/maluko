// Toolbox.js
import React from "react"

function Toolbox({
  position,
  setPosition,
  rotation,
  setRotation,
  size,
  setSize,
}) {
  return (
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
            setPosition((prev) => ({ ...prev, x: e.target.value }))
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
            setPosition((prev) => ({ ...prev, y: e.target.value }))
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
          onChange={(e) => setRotation(e.target.value)}
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
          onChange={(e) => setSize(e.target.value)}
        />
      </label>
    </div>
  )
}

export default Toolbox
