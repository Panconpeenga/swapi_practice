import React from 'react';

const Navbar = ({changeCategory}) => {
  return (
    <nav
      className='outline'
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <p onClick={() => changeCategory('https://swapi.co/api/')} className='pointer pa2'>Main Database</p>
      <p onClick={(url, category) => changeCategory(url='https://swapi.co/api/films/', category='films')} className='pointer pa2'>Films</p>
      <p onClick={(url,category) => changeCategory(url='https://swapi.co/api/planets/', category='planets')} className='pointer pa2'>Planets</p>
      <p onClick={(url, category) => changeCategory(url='https://swapi.co/api/people/', category='people')} className='pointer pa2'>People</p>
      <p onClick={(url, category) => changeCategory(url='https://swapi.co/api/vehicles/', category='vehicles')} className='pointer pa2'>Vehicles</p>
      <p onClick={(url, category) => changeCategory(url='https://swapi.co/api/starships/', category='starships')} className='pointer pa2'>Starships</p>
      <p onClick={(url, category) => changeCategory(url='https://swapi.co/api/species/', category='species')} className='pointer pa2'>Species</p>
    </nav>
  )
}

export default Navbar;
