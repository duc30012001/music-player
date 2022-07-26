import React, { useState } from "react";
import style from "./playerControl.module.css";
import {
    MdShuffle,
    MdPlayCircle,
    MdSkipPrevious,
    MdSkipNext,
    MdPauseCircle,
    MdRepeatOne,
    MdRepeat,
} from "react-icons/md";

const PlayerControl = ({
    index,
    setId,
    isPlaying,
    setIsPlay,
    length,
    song,
    isNull,
}) => {
    const [repeatMode, setRepeatMode] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);

    // Xu ly khi bam nut play/pause
    const handlePlay = () => {
        if (isNull) {
            setIsPlay(false);
            return;
        }
        isPlaying ? song.pause() : song.play();
        setIsPlay(!isPlaying);
    };

    const autoPlay = () => {
        isPlaying ? (song.autoplay = true) : (song.autoplay = false);
    };

    // Xu ly khi chuyen sang bai tiep theo
    const handleNext = () => {
        if (isShuffle) {
            let nextId = Math.floor(Math.random() * length);
            setId(nextId);
        } else {
            index === length - 1 ? setId(0) : setId(index + 1);
        }
        autoPlay();
    };

    // Xu ly khi chuyen sang bai phia truoc
    const handlePre = () => {
        index === 0 ? setId(length - 1) : setId(index - 1);
        autoPlay();
    };

    // Xu ly khi phat ngau nhien
    const handleShuffle = () => {
        setIsShuffle(!isShuffle);
    };

    // Xu ly khi chon lap lai bai hat
    const handleRepeat = () => {
        repeatMode === 2 ? setRepeatMode(0) : setRepeatMode(repeatMode + 1);
    };

    // Xu ly khi ket thuc bai hat
    const handleEnd = () => {
        if (repeatMode === 0 && index === 19) {
            setIsPlay(false);
            return;
        }
        if (repeatMode < 2) handleNext();
    };

    if (song) {
        repeatMode === 2 ? (song.loop = true) : (song.loop = false);
        song.onended = () => {
            handleEnd();
        };
    }

    return (
        <div className={style.container}>
            <button
                className={`${style.button} ${
                    isShuffle ? `${style.active}` : ""
                }`}
                onClick={handleShuffle}
            >
                <MdShuffle />
            </button>
            <button className={style.button} onClick={handlePre}>
                <MdSkipPrevious />
            </button>
            <button
                className={`${style.button} ${style.playBtn}`}
                onClick={handlePlay}
            >
                {isPlaying ? <MdPauseCircle /> : <MdPlayCircle />}
            </button>
            <button className={style.button} onClick={handleNext}>
                <MdSkipNext />
            </button>
            <button
                className={`${style.button} ${
                    repeatMode > 0 ? `${style.active}` : ""
                }`}
                onClick={handleRepeat}
            >
                {repeatMode <= 1 ? <MdRepeat /> : <MdRepeatOne />}
            </button>
        </div>
    );
};

export default PlayerControl;
