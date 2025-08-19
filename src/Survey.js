import axios from 'axios'
import React, { useState } from 'react'

function Survey() {

    const [fstansw, setfstansw] = useState('')
    const [secansw, setsecansw] = useState('')
    const [stats, setstats] = useState('')

    /////////SEND SURVEY ANSWERS\\\\\\\\\\\
    const handleSurvey =async()=>{
        setstats('true')
        try {
            await axios.post('https://subscribersserver.onrender.com/surveys',{fstansw, secansw}).then((res)=>{
                if(res.data.status === 'success'){
                    setstats('false')
                    setfstansw('')
                    setsecansw('')
                    alert('Survey Submited')
                }else{
                    alert(res.data.message)
                    setstats('')
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <p>How did you hear about us ?</p>
        <textarea value={fstansw} onChange={(e)=>setfstansw(e.target.value)} />
        <p>What are you most excited about ?</p>
        <textarea value={secansw} onChange={(e)=>setsecansw(e.target.value)} />

        {
            stats === 'true' ?
                <button>Submiting</button>
            :
            stats === 'false' ?
                <button>Submited</button>
            :
            <button onClick={handleSurvey} >Submit</button>
        }
    </div>
  )
}

export default Survey