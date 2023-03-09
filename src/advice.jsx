import React from 'react'
import "./advice.css"
import axios from "axios"
const Advice = () => {



    const [advice, setAdvice]= React.useState()

    const advicet = () => {
        
        axios.get('https://api.adviceslip.com/advice')
        .then(res => {
            const data = res.data.slip;
            setAdvice(data);
        })

        // fetch('https://api.adviceslip.com/advice')
        // .then(response => response.json())
        // .then(data => {
        //     const julius = data.slip;
        //     setAdvice(julius)
        // })
      }   



    React.useEffect(()=>{
         advicet();
    },[])


  return (
    <div
     className='flex'
    >
        <div  className='flex-item' >
            <p
            className='advice-tag'
            >
                #{advice.id}
            </p>
            <h1  className='advice-message' >
              {advice.advice}
            </h1>
        </div>
        <div  className='flex-item'>
            <button className='button'
            onClick={advicet}
            >
                advice
            </button>
        </div>


    </div>
  )
}

export default Advice