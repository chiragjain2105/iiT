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


function IIT() {
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
                navigate("/iit")
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
                {/* <Route path='/' element={<Start />}>
                    <Route path='login' element={<Login username={username} setUsername={setUsername} userpassword={userpassword} setUserpassword={setUserpassword} handleLogin={handleLogin} ></Login>} />
                    <Route path='register' element={<Register></Register>} />
                </Route> */}
                 <Route path='/' element={<Login  username={username} setUsername={setUsername} userpassword={userpassword} setUserpassword={setUserpassword} handleLogin={handleLogin} ></Login>}>
                    
                </Route>
                <Route path='/register' element={<Register></Register>} />
                <Route path='/*' element={<NotFound />}></Route>
                {/* <Route path='/iit' element={ <Body inputText={inputText} setInputText={setInputText} handleReset={handleReset} />}/> 
                
                  <Route path="/askQues" element={  <AskQuestion inputText={inputText} />} />
                
                */}
                {/* <Route path='/iit' element={<Protected Component={` <Body inputText={inputText} setInputText={setInputText} handleReset={handleReset} />`}/> }/>
                <Route path="/askQues" element={ <Protected Component={`<AskQuestion inputText={inputText} />`} />} /> */}
                <Route element={<Protected authToken={authToken} />}>
                    <Route path='/iit' element={<Body inputText={inputText} setInputText={setInputText} handleReset={handleReset} />} />
                    <Route path="/askQues" element={<AskQuestion inputText={inputText} />} />
                </Route>

            </Routes>
        
        </div>
    )
}

export default IIT
