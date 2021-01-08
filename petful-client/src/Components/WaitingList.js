import React, { useState } from 'react'
import config from '../config'
import People from './People'
function WaitingList(props) {
  let pets = props
    
    const [name, setName] = useState('Name..')
    const [text, setText] = useState('')
    const [form, setForm] = useState('waiting-list')
    
    
  function addToList(e) {
      e.preventDefault()
     let person = name
    fetch(`${config.API_ENDPOINT}/people`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ person })
      })    
    //   setName('')
      setForm('hidden')
      setText('Your Name Has Been Added. Please Wait..')
}
    const username = name
    return (
        <div className='adoption'>     
            {text}
            <div className={form}>
            <h2>Adopt a Pet Today!</h2>
            <p>Enter Your Full Name:</p>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} /> 
          <div><button onClick={addToList}>Join Waiting List</button>
          </div>
          </div>
          <People user={username} pet={pets}/>
        </div>
    )
}

export default WaitingList
