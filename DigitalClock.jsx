import React, {useState, useEffect} from "react"

function DigitalClock(){

    const currentDate = new Date();

    const [time, setTime] = useState(currentDate);

    function updateTime(){
        const newCurrentDate = new Date();
        setTime(newCurrentDate);
    }

    useEffect(()=>{//ke start timer koga komponetata ke se mount na DOM

        const intervalId = setInterval(updateTime, 1000); //povikaj ja ovaa funkcija na sekoj 1000 ms t.e. 1s

        return()=>{
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds = time.getSeconds();
        let result = hours+":"+minutes+":"+seconds;
       
        return result;
    }

    return(
        <>
       
            <div className="clock">
                <span>{formatTime()}</span>
            </div>

        
        </>
    );
}

export default DigitalClock;
