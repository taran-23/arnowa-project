import React from 'react';
import { useState,useEffect } from 'react';


const Timer = ({MinSecs}) => {
   
    const {  minutes = 0, seconds = 60 } = MinSecs;
    const [[ mins, secs], setTime] = useState([ minutes, seconds]);
    

    const tick = () => {
   
        if (mins === 0 && secs === 0) 
            reset()
        else if ( secs === 0) {
            setTime([mins- 1,59]);
        }  else {
            setTime([ mins, secs - 1]);
        }
    };


    const reset = () => setTime([ parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
      
    });

   
    
    return (
        <div>
            <p>{`${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default Timer;