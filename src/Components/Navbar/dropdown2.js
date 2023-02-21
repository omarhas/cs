import React from 'react'
import './galeries.css';
import { Router,Routes,Link } from 'react-router-dom';
import { NavLinksRoute } from './NavbarElements';
const Dropdown2 = () => {
  return (
    <div className='main'>
        <ul>
            <li>
                <a href='#'>
               
                    <NavLinksRoute 
                        smooth= {true} 
                        duration= {500} 
                        spy={true}
                        exact='true'
                        to="/Projet2">
                        Voler de ses Propres ailes
                    </NavLinksRoute></a>
               
            </li>
        </ul>
    </div>
  )
}

export default Dropdown2;