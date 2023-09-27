import React from 'react'


export default function Blog() {
  return (
    <div style={{width:'54.36vw', height:'79.05vh'}}>
        <div style={{width:'100%', height:'100%'}}> 
        <textarea name="content" placeholder="Write your content here..." style={{width:'100%', height:'100%', resize:'none'}}></textarea>
        </div>
        {/* <div className="input" style={{width:'100%', height:'100%'}}>
            <input type="text" style={{width:'100%', height:'100%', }}/>
        </div> */}
    </div>
  )
}
