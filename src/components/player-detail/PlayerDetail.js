import React, { useEffect, useRef, useState } from "react";
import style from "./playerDetail.module.css";

const PlayerRange = ({ song, setCurrentTime, isNull }) => {
    const [dur, setDur] = useState("00:00");
    const [curTime, setCurTime] = useState("00:00");
    const [value, setValue] = useState(0);

    console.log(isNull);
    const rangeRef = useRef();

    useEffect(() => {
        const logCurTime = setInterval(() => {
            setValue(Math.floor((song?.currentTime / song?.duration) * 100));
            rangeRef.current.style.backgroundSize = `${
                (song?.currentTime / song?.duration) * 100
            }% 10px`;

            // hien thi thoi gian hien tai cua bai hat
            let minCur = Math.floor(song?.currentTime / 60);
            let secCur = Math.floor(song?.currentTime - minCur * 60);
            let cur = `${minCur < 10 ? `0${minCur}` : minCur}:${
                secCur < 10 ? `0${secCur}` : secCur
            }`;
            setCurTime(cur);

            // hien thi do dai cua bai hat
            let min = Math.floor(song?.duration / 60);
            let sec = Math.floor(song?.duration - min * 60);
            let dur = `${min < 10 ? `0${min}` : min}:${
                sec < 10 ? `0${sec}` : sec
            }`;
            setDur(dur);
        }, 1000);

        if (isNull) {
            song.pause();
            clearInterval(logCurTime);
            rangeRef.current.style.backgroundSize = "0 10px";
            setCurTime("00:00");
            setDur("00:00");
        }

        return () => clearInterval(logCurTime);
    }, [song, isNull]);

    const handleOnChange = (e) => {
        rangeRef.current.style.backgroundSize = `${e.target.value}% 10px`;
        setValue(Math.floor((song?.currentTime / song?.duration) * 100));
        let currentTime = (e.target.value / 100) * song.duration;
        setCurrentTime(currentTime);
    };

    return (
        <div className={style.container}>
            <input
                className={style.range}
                ref={rangeRef}
                type="range"
                min="1"
                max="100"
                value={isNull ? 0 : value}
                onChange={(e) => handleOnChange(e)}
            />
            <div className={style.detail}>
                <span className={style.current}>{curTime}</span>
                <span className={style.duration}>{dur}</span>
            </div>
        </div>
    );
};

export default PlayerRange;
