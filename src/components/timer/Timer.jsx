import React, {  useContext, useEffect, useRef } from "react";
import { TimerContext } from '../../context/TimerContext';
import styles from "./Timer.module.css";

export const Timer = () => {

    const [counter, setCounter] = useContext(TimerContext);

    useEffect(() => {
        const timer = counter.seconds > 0 && setInterval(() => setCounter({seconds: counter.seconds - 1, isActive: true}), 1000);
        console.log(counter.seconds);
        if (counter.seconds === 0) {
            alert("Time's Up!")
            setCounter({seconds: '', isActive: false});
            console.log(counter);
        };
        if (!counter.isActive) {
            console.log(counter);
        };
        return () => 
            clearTimeout(timer);   
    },[counter.seconds, counter.isActive]);

    return ( 
            <div 
            className={`${counter.isActive === true}` ? `${styles.timer}` : `${styles.hide}`}>
            {counter.seconds}
            </div>
     );
}

export default Timer;