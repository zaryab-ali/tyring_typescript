import { time } from 'console';
import React, { useState } from 'react'

export default function MovieForm() {

    const[name, setName] = useState<string>("");
    const[genre, setGenre] = useState<string>("");
    const[duration, setDuration] = useState<string>("");
    const[showDiv, setShowDiv] = useState<boolean>(false);

    const handleSubmit = (event : any) => {
        event.preventDefault();
    };



    
  return (
    <div>
        <form
        style={{display : 'flex',
        flexDirection : 'column'
    
        }}
        onSubmit={handleSubmit}
        >
            <input
            placeholder='name'
            className='name'
            //value={name}
            onChange={(e)=>{
                    setName(e.target.value)
            }}
            onClick={()=>{setShowDiv(false)}}

            />

            <input
            placeholder='genre'
            className='genre'
            //value={genre}
            onChange={(e)=>{
                setGenre(e.target.value)
            }}
            onClick={()=>{setShowDiv(false)}}

            
            />

            <input
            placeholder='duration'
            className='duration'
            //value={duration}
            onChange={(e)=>{
                setDuration(e.target.value)
            }}
            onClick={()=>{setShowDiv(false)}}

            
            />

            {showDiv && 
                <div>
                    wrong format for the duration

                </div>
            } 
            
            <input 
            type='submit' 
            className='submit'
            placeholder='submit'
            onClick={()=>{
                const firstPart = duration.slice(0, -1);
                const lastPart = duration.slice(-1);

                const isNumber = !isNaN(Number(firstPart));

                if(isNumber && (lastPart === "m" || "h")){
                    if(lastPart === "h"){
                        console.log("the format is correct");

                    }else{
                        let min = Number(firstPart);
                        min = min/60;
                        let minSting = String(min);
                        minSting = minSting.concat("h");
                        setDuration(minSting);
                        console.log(duration); 


                    }
                }else{
                    setShowDiv(true);
                }



            }}
            />
        </form>
    </div>
  )
}
