import logo from '../../../public/logo.png';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <img style={{ width: "85px"}} src={logo} alt="Logo of the online store" title="Store Logo"/>
        </div>
    )
}

export default Logo