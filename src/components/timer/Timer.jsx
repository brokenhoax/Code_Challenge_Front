import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer = () => {

    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(true);
    
    const hideTimer = () => {
        setIsActive(!isActive);
    }

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
        if (seconds === 0) {
            setSeconds(!isActive);
            alert("Time's Up!")
        }
    }, [seconds]);


    return ( 
        <div 
            className={isActive ? `${styles.timer}` : `${styles.hide}`}>
            {seconds}
        </div>
     );
}
 
export default Timer;