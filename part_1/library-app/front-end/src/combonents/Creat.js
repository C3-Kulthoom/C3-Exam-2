import React, { useState } from 'react'
import axios from 'axios'
const Creat=()=> {
const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [pages,setPages] = useState(0)
const [publisher,setPublisher] = useState("")
const [published_at,setPublished_at] = useState("")
const [allBooks,setAllBooks] = useState("")


     const addingBook=()=>{
        axios.post("http://localhost:5000//library/create_book" ,{title,author,pages,publisher,published_at} ).then((result)=>{setAllBooks(result)}).catch((err)=>{console.log(err); })

     }
    return (
        <div>
            
            {/* title : {type : String }
     , author :{type : String }
     , pages: {type : Number }
     , publisher: {type : String }
     , published_at :{type : Date }


}) */}

<input type="text" placeholder ="the title   here" onChange={(e)=>{setTitle(e.target.value)}}/>
<input type="text" placeholder ="the author   here" onChange={(e)=>{setAuthor(e.target.value)}}/>
<input type="Number" placeholder ="the  pages  here" onChange={(e)=>{setPages(e.target.value)}}/>
<input type="text" placeholder ="the  publisher  here" onChange={(e)=>{setPublisher(e.target.value)}}/>
<input type="Date" placeholder ="the  published_at  here" onChange={(e)=>{setPublished_at(e.target.value)}}/>

<button  onClick={()=>{addingBook()}}>submit</button>
<p>

{
   allBooks.map((e,i)={
       return <p>{e}</p>
       
   })
}

</p>









        </div>
    )
}

export default Creat
