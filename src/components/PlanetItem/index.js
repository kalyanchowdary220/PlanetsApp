// Write your code here

import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="planetItem-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-para">{description}</p>
    </div>
  )
}

export default PlanetItem
