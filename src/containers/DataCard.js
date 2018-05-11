import React, {Component} from 'react';
import './DataCard.css'

class DataCard extends Component {

  render() {
    const { data, category } = this.props;
    switch (category) {
      case 'films':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.title}</strong><br/></li>
            <li>Opening Crawl: <br/>
              {data.opening_crawl}</li>
            <li>Director: {data.director}</li>
            <li>Producer: {data.producer}</li>
            <li>Release: {data.release_date}</li>
          </ul>
        </div>
        )
      case 'planets':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.name}</strong><br/></li>
            <li>Diameter: {data.diameter}</li>
            <li>Rotation Period: {data.rotation_period} Standard Hours</li>
            <li>Orbital Period: {data.orbital_period} Standard Days</li>
            <li>Gravity: {data.gravity} Gs</li>
            <li>Population: {data.population}</li>
            <li>Climate: {data.climate}</li>
            <li>Terrain: {data.terrain}</li>
            <li>Surface Water: {data.surface_water}%</li>
          </ul>
        </div>
      )
      case 'people':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.name}</strong><br/></li>
            <li>Birth Year: {data.birth_year}</li>
            <li>Eye Color: {data.eye_color}</li>
            <li>Gender: {data.gender}</li>
            <li>Hair Color: {data.hair_color}</li>
            <li>Height: {data.height}</li>
            <li>Mass: {data.mass}</li>
          </ul>
        </div>
              )
      case 'vehicles':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.name}</strong><br/></li>
            <li>Model: {data.model}</li>
            <li>Class: {data.vehicle_class}</li>
            <li>Manufacturer: {data.manufacturer}</li>
            <li>Length: {data.length} meters</li>
            <li>Max Atmosphering Speed: {data.max_atmosphering_speed}</li>
            <li>Crew Required: {data.crew}</li>
            <li>Passengers: {data.passengers}</li>
            <li>Cargo Capacity: {data.cargo_capacity}</li>
          </ul>
        </div>
        )
      case 'starships':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.name}</strong><br/></li>
            <li>Model: {data.model}</li>
            <li>Class: {data.starship_class}</li>
            <li>Manufacturer: {data.manufacturer}</li>
            <li>Length: {data.length} meters</li>
            <li>Cost in Credits: {data.cost_in_credits}</li>
            <li>Max Atmosphering Speed: {data.max_atmosphering_speed}</li>
            <li>Crew Required: {data.crew}</li>
            <li>Passengers: {data.passengers}</li>
            <li>Cargo Capacity: {data.cargo_capacity}</li>
            <li>Hyperdrive Rating: {data.hyperdrive_rating}</li>
            <li>MGLT: {data.MGLT}</li>
          </ul>
        </div>
        )
      case 'species':
      return (
        <div>
          <ul className='list pl0'>
            <li><strong>{data.name}</strong><br/></li>
            <li>Classification: {data.classification}</li>
            <li>Designation: {data.designation}</li>
            <li>Height: {data.average_height}</li>
            <li>Lifespan: {data.lifespan}</li>
            <li>Eye Color: {data.eye_colors}</li>
            <li>Hair Color: {data.hair_colors}</li>
            <li>Skin Color: {data.skin_colors}</li>
            <li>Language: {data.language}</li>
            <li>Homeworld: {data.homeworld}</li>
          </ul>
        </div>
        )
      default:
      return <li>Gathering Data...</li>
    }
  }
}

export default DataCard;
