import React from 'react';
import './Logo.css';
const Logo = () => {
    return (
        <div className='marca'>
            <img className='marca-img' src="public/logo.png" alt="logo"/>
            {/* <h2 className='marca-nombre'>Cubic Store</h2> */}
        </div>
    )
}

export default Logo