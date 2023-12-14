import React, { useEffect, useState } from 'react';
import UserSound from './Assests/sounds/wait.mp3'
import useSound from 'use-sound';
const Timer = ({ SetStop,questionNumber }) => {
    const [WaitSound] = useSound(UserSound);
    const [timer, setTimer] = useState(30);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);
        if (timer === 0) {
            clearInterval(interval);
            SetStop(true);
        }

        return () => clearInterval(interval);
    }, [timer, SetStop]);

    useEffect(()=>{
        setTimer(30)
    },[questionNumber,WaitSound])
    return <div>{timer}</div>;
};

export default Timer;
