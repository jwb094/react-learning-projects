import React, { useEffect, useState } from "react";
import './DigitalClock.css';

const DigitalClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formattedTime = time.toLocaleTimeString({ hour12: false });

    return (<div className="clock-container">
        <h1>Digital Clock</h1>
        <div className="clock-display">
            {formattedTime}
        </div>
    </div >)
}

export default DigitalClock;