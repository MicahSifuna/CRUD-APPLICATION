import React from 'react'
import "./header.css";
import adult from './assets/adult.jpg'

const Header = () => {
  return (
    <div className='header'>
      <div className='adult'>
        <img src={adult} alt='' />
      </div>
        <h2>Welcome to This Full Stack Web Application</h2>
        <p>You can Add, Delete, view, Edit and store the data into the database</p>
    </div>
  )
}

export default Header;