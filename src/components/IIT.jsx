import React, { useState,useEffect } from 'react'
import Header from './Header'
import { Routes, Route } from 'react-router-dom';
import Body from './Body';
import AskQuestion from './askQuestion';


function IIT() {
    const [inputText,setInputText] = useState('');
    const handleReset = () => {
        setInputText('');
    }

  
    return (
        <div>
            <div className="header">
                <Header></Header>
            </div>
            <Routes>
                <Route path='/' element={ <Body inputText={inputText} setInputText={setInputText} handleReset={handleReset} />}/>
                <Route path="/askQues" element={<AskQuestion inputText={inputText} />} />
            </Routes>
        </div>
    )
}

export default IIT
