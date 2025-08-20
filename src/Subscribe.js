import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Subscribe() {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [stats, setstats] = useState('')

    /////////SEND USER DETAILS\\\\\\\\\\\
    const handleSubscribe =async()=>{
        setstats('true')
        try {
            await axios.post('https://subscribersserver.onrender.com/subscribe', {email, name}).then((res)=>{                
                if(res.data.status === 'success'){
                    setstats('false')
                    setemail('')
                    setname('')
                    alert('Subscription Successfull')
                }else{
                    alert(res.data.message)
                    setstats('')
                }
            })
        } catch (error) {
            console.log(error?.message);
        }
    }

  return (
    <div>
        <div>
            <input value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter Your Name' />
        </div>
        <input value={email} onChange={(e)=>setemail(e.target.value.trim())} placeholder='Enter Your Email' />
        {
            stats === 'true' ?
                <button>Subscribing</button>
            :
            <button onClick={handleSubscribe} >Subscribe</button>
        }

        <Link to={'/survey'} >Click to survey</Link>
    </div>
  )
}

export default Subscribe
