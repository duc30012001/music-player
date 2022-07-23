import React, { useEffect, useState } from "react";

const PlayerRange = ({ song }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const logCurTime = setInterval(() => {
            if (song) {
                console.log(song.currentTime, song.duration);
                setValue(Math.floor((song.currentTime / song.duration) * 100));
            }
        }, 1000);

        return () => clearInterval(logCurTime);
    }, [song]);

    const handleOnChange = (e) => {
        setValue(e.target.value);
        song.currentTime = (value / 100) * song.duration;
    };

    return (
        <div className="player__detail">
            <input
                type="range"
                className="player__range"
                min="1"
                max="100"
                value={value}
                onChange={(e) => handleOnChange(e)}
            />
            <div className="player__duration">
                <span className="player__time">00:00</span>
                <span className="player__song-duration">00:00</span>
            </div>
        </div>
    );
};

export default PlayerRange;
