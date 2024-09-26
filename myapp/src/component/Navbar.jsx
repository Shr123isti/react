import React from 'react'
import img from './logo.jpg'
import './index.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
        <div className='navbar'  >
        
            <div>
                <img src={img} height={70} width={70} style={{borderRadius:"50%"}}/>
            </div>
            
            <NavLink to="/Home" style={{color:"white" , marginTop:"15px", textDecorationLine:"none", fontSize:"larger"}}>Home</NavLink>
            <NavLink to="/About" style={{color:"white" , marginTop:"15px",textDecorationLine:"none", fontSize:"larger" }}>About</NavLink>
            <NavLink to="/Contact" style={{color:"white" , marginTop:"15px" , textDecorationLine:"none", fontSize:"larger" }}>Contact</NavLink>
           
  
            
        </div>
        

    
        </>
      
    )
}
export default Navbar