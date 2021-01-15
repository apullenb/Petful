import React, { useEffect, useState }  from 'react';
import Adoption from '../Components/Adoption';
import WaitingList from '../Components/WaitingList'
import config from '../config'




function Adopt() {



   const returning = localStorage.getItem('token')
    if(returning){
       return (
        <div className='adopt'>
        <h3>You Have Already Adopted {returning}!</h3>
        <h4>Please Come Back Another Day</h4>
    </div>
       )
    }
    return (
        <div>
            <h2 style={{textAlign:'center', fontSize:'32px'}}>Pets Available Now:</h2>
            <Adoption />
           
        </div>
    )
}

export default Adopt
