
import React from 'react';
import { useState, useEffect } from "react";
import CopiedSymbol from './CopiedSymbol'



const EmojiContent = () => {

    const [data, setData] = useState(null);
    const [copiedSymbol, setCopiedSymbol] = useState(null)
    const [active, setActive] = useState(null)
    const [query, setQuery] = useState("")


    useEffect(()=>{
        fetch(`https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json`)
        .then((response) => response.json())
        .then((actualData) => {
            setData(actualData)
        })
        .catch((err) => {
        console.log(err.message);
    });
    
    },[])
    
   

    function copyText(symbol) {
        navigator.clipboard.writeText(symbol)
        setCopiedSymbol(symbol)
        setActive('active')
        setTimeout(function(){
            setActive('')
        },2000)
      }
      
    return(
            <>
              <div className="search">
                    <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder='Search...'/>
                </div>
                <div className='emoji-container'>
                    { 
                            data?.filter((el) => el.keywords.includes(query)).map((el, id) =>(
                                <button key={id} onClick={e => copyText(el.symbol)}>
                                <div>{el.symbol}</div>
                                </button>
                            )).slice(0,16)
                            }
                </div>
                <CopiedSymbol copiedSymbol={copiedSymbol} active={active}/>
            </>
           
     
    )
}

export default EmojiContent