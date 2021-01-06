import React, { useEffect, useState }  from 'react';
import Adoption from '../Components/Adoption';
import config from '../config'




function Adopt() {

   

    return (
        <div>
            <h2 style={{textAlign:'center', fontSize:'32px'}}>Pets Available Now:</h2>
            <Adoption />
        </div>
    )
}

export default Adopt
