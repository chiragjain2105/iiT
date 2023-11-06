import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Body from './Body';
import AskQuestion from './askQuestion';
import Start from './Start';
import Login from './login';
import Register from './register';
import NotFound from './NotFound';
import Protected from './Protected';
import axios from 'axios';
import Docs from './Docs';


function IIT() {
    const [showicon, setShowicon] = useState(false);
    const [authToken, setAuthToken] = useState(false);
    const [inputText, setInputText] = useState('');
    const handleReset = () => {
        setInputText('');
    }
    const [username,setUsername]=useState("")
    const [userpassword,setUserpassword]=useState("")
    const navigate= useNavigate()
    const handleLogin =async()=>{
        // alert("Login ho gya")
        debugger
        const postData ={
            username:username,
            password:userpassword
        }
        try {
            var response = await axios.post('http://localhost:8000/login', postData)
            console.log(response)
            console.log("check staut",response.data.loginStatus)
            if(response.data.loginStatus){
                setAuthToken(response.data.loginStatus)
                navigate("/start")
            }
            else{
                setAuthToken(false)
                alert(response.data.detail)
            }
            console.log("1",authToken)
          }
          catch(error) {
            console.error('POST request error:', error);
          }
    }


    return (
        <div>
            <div className="header_main" style={{margin:"0"}}>
                <Header></Header>
            </div>
      
            <Routes>
                
                 <Route path='/' element={<Login  username={username} setUsername={setUsername} userpassword={userpassword} setUserpassword={setUserpassword} handleLogin={handleLogin} ></Login>}>
                    
                </Route>
                <Route path='/register' element={<Register></Register>} />
                <Route path='/*' element={<NotFound />}></Route>
                {/* new docs page testing*/}
                {/* <Route path='/docs' element={<Docs/>}></Route> */}
               
                <Route element={<Protected authToken={authToken} />}>
                <Route path='/start' element={<Start/>}></Route>
                    <Route path='/iit' element={<Body inputText={inputText} setInputText={setInputText} handleReset={handleReset} setShowicon={setShowicon} />} />
                    <Route path="/askQues" element={<AskQuestion inputText={inputText} showicon={showicon} />} />
                    <Route path='/docs' element={<Docs setShowicon={setShowicon} setInputText={setInputText}/>}></Route>
                </Route>

            </Routes>
        
        </div>
    )
}

export default IIT
