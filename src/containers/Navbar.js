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
      <p onClick={(url, category, cardLoaded) => changeCategory(url='https://swapi.co/api/films/', category='films', cardLoaded=false)} className='pointer pa2'>Films</p>
      <p onClick={(url,category, cardLoaded) => changeCategory(url='https://swapi.co/api/planets/', category='planets', cardLoaded=false)} className='pointer pa2'>Planets</p>
      <p onClick={(url, category, cardLoaded) => changeCategory(url='https://swapi.co/api/people/', category='people', cardLoaded=false)} className='pointer pa2'>People</p>
      <p onClick={(url, category, cardLoaded) => changeCategory(url='https://swapi.co/api/vehicles/', category='vehicles', cardLoaded=false)} className='pointer pa2'>Vehicles</p>
      <p onClick={(url, category, cardLoaded) => changeCategory(url='https://swapi.co/api/starships/', category='starships', cardLoaded=false)} className='pointer pa2'>Starships</p>
      <p onClick={(url, category, cardLoaded) => changeCategory(url='https://swapi.co/api/species/', category='species', cardLoaded=false)} className='pointer pa2'>Species</p>
    </nav>
  )
}

export default Navbar;
