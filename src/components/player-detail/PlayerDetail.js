import React, { useEffect, useRef, useState } from "react";
import "./player-detail.css";

const PlayerRange = ({ song, setCurrentTime }) => {
    const [dur, setDur] = useState("00:00");
    const [curTime, setCurTime] = useState("00:00");
    const [value, setValue] = useState(0);

    // let value = useRef(0);
    const rangeRef = useRef();

    useEffect(() => {
        const logCurTime = setInterval(() => {
            setValue(Math.floor((song?.currentTime / song?.duration) * 100));

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

        return () => clearInterval(logCurTime);
    }, [song]);

    const handleOnChange = (e) => {
        rangeRef.current.style.backgroundSize = `${e.target.value}% 10px`;
        setValue(Math.floor((song?.currentTime / song?.duration) * 100));
        let currentTime = (e.target.value / 100) * song.duration;
        setCurrentTime(currentTime);
    };

    return (
        <div className="player__detail">
            <input
                ref={rangeRef}
                type="range"
                className="player__range"
                min="1"
                max="100"
                value={value}
                onChange={(e) => handleOnChange(e)}
            />
            <div className="player__duration">
                <span className="player__time">{curTime}</span>
                <span className="player__song-duration">{dur}</span>
            </div>
        </div>
    );
};

export default PlayerRange;
