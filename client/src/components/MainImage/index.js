import React from 'react';
import logoname from '../../assets/plushigif.gif'
import './style.css';

function MainImage() {
  return (
    <div>
      <img className="logoimg" src={logoname} alt="logo..." />   
      <h1 className='ribbon'>Shop secondhand Plushies that need a home in your PlushiNet!</h1>   
    </div>
  );
}

export default MainImage;
