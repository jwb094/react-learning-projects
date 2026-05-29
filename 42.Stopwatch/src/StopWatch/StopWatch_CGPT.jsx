import { useEffect, useRef, useState } from "react";

export default function StopWatch_CGPT() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    const timeHandler = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timeHandler.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timeHandler.current);
    }, [isRunning]);

    const restart = () => {
        setTime(0);
        setIsRunning(true);
    };

    const pause = () => {
        setIsRunning(false);
    };

    const unpause = () => {
        setIsRunning(true);
    };

    return (
        <>
            <h1>{time}</h1>

            <button
                onClick={restart}
                className="btn btn-info"
            >
                Restart
            </button>

            <button
                onClick={pause}
                className="btn btn-danger"
            >
                Pause
            </button>

            <button
                onClick={unpause}
                className="btn btn-success"
            >
                Resume
            </button>
        </>
    );
}