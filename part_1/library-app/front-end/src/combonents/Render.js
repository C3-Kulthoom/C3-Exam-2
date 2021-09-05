import React, { useState } from 'react'
import axios from 'axios'
import React from 'react'

const  Render=()=> {

    const [alBooks,setAlBooks] = useState("")
  const   gettitlandauth=()=>{
      axios.get("http://localhost:5000//library/create_book").then((result)=>{
        setAlBooks(result)
      })
  }
    return (
        <div>
            <button  onClick ={()=>{
                gettitlandauth()
            }}>title and author</button>

            <>

            alBooks .map((e,i)=>{
       return (<p>{e.title }</p>
        <p>{e.author }</p>)
       })
            </>

        </div>
    )
}

export default Render
