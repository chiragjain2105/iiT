import React, { useState } from 'react'


export default function Blog({inputText,setInputText}) {
  
  return (
    <div style={{width:'54.36vw', height:'79.05vh'}}>
        <div style={{width:'100%', height:'100%'}}> 
        <textarea name="content" placeholder="Write your content here..." value={inputText} onChange={(e)=>setInputText(e.target.value)} style={{width:'100%', height:'100%', resize:'none'}}></textarea>
        </div>
        {/* <div className="input" style={{width:'100%', height:'100%'}}>
            <input type="text" style={{width:'100%', height:'100%', }}/>
        </div> */}
    </div>
  )
}
