import React, { useContext } from "react";
import styles from "./Timer.module.css";
import { TimerContext } from '../../context/TimerContext';


export const Timer = props => {
    const [counter, setCounter] = useContext(TimerContext);
    return ( 
            <div 
            className={`${counter.isActive}` ? `${styles.timer}` : `${styles.hide}`}>
            {counter.seconds}
            </div>
     );
}

export default Timer;