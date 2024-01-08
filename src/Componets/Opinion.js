import "./Opinion.css"
import { useState } from 'react'
const Opinion = () => {
    const [name,setName] = useState("")
    const [comments, setComments] = useState("")

    const submitHandler = async (e) => {
          e.preventDefault()
          try {
            const response = await fetch("https://hotel-opinions.onrender.com/opinions",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    comments
                })
              })
    
              const data = await response.json()
              console.log(data);
          } catch (error) {
            console.log(error)
          }
         
    }

    return (
        <>
        <div class="main-div flex-row">
            <div class="card flex-col">
                <p>Your Opinion</p>
                <input className="inputs" placeholder="Enter your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className="inputs" placeholder="Enter your Comments" onChange={(e) => setComments(e.target.value)}></input>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Opinion