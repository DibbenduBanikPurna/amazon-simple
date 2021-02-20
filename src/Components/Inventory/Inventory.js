import React from 'react';
import Sleeping from '../../images/sleep.jpg'
const Inventory = () => {
    const inStyle={
        textAlign:'center',
        color:'red'
    }
    return (
        <div>
            <h1 style={inStyle}>Hi,Developer is Sleeping</h1>
            <h2 style={inStyle}>Don,t Disturb Me!!</h2>
            <img src={Sleeping} alt="ghum"/>
        </div>
    );
};

export default Inventory;