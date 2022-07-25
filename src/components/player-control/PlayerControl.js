import React, { useState } from "react";
import "./player-control.css";
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
}) => {
    const [repeatMode, setRepeatMode] = useState(0);
    const [isShuffle, setIsShuffle] = useState(false);

    // Xu ly khi bam nut play/pause
    const handlePlay = () => {
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
        <div className="player__control">
            <button
                className={`player__btn player__shuffle ${
                    isShuffle ? "active" : ""
                }`}
                onClick={handleShuffle}
            >
                <MdShuffle />
            </button>
            <button className="player__btn player__pre" onClick={handlePre}>
                <MdSkipPrevious />
            </button>
            <button className="player__btn player__play" onClick={handlePlay}>
                {isPlaying ? <MdPauseCircle /> : <MdPlayCircle />}
            </button>
            <button className="player__btn player__next" onClick={handleNext}>
                <MdSkipNext />
            </button>
            <button
                className={`player__btn player__repeat ${
                    repeatMode > 0 ? "active" : ""
                }`}
                onClick={handleRepeat}
            >
                {repeatMode <= 1 ? <MdRepeat /> : <MdRepeatOne />}
            </button>
        </div>
    );
};

export default PlayerControl;
