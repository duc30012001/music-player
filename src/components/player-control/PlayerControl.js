import React from "react";
import buttons from "./buttons";
import "./player-control.css";

const PlayerControl = ({
    index,
    setId,
    isPlaying,
    setIsPlay,
    length,
    song,
}) => {
    const handlePlay = () => {
        if (isPlaying) {
            song.pause();
            // setIsPlay(false);
        } else {
            song.play();
            // setIsPlay(true);
        }
        setIsPlay(!isPlaying);
    };

    const autoPlay = () => {
        if (isPlaying) {
            song.autoplay = true;
        } else {
            song.autoplay = false;
        }
    };

    const handleNext = () => {
        if (index === length - 1) {
            setId(0);
        } else {
            setId(index + 1);
        }
        autoPlay();
    };

    const handlePre = () => {
        if (index === 0) {
            setId(length - 1);
        } else {
            setId(index - 1);
        }
        autoPlay();
    };

    return (
        <div className="player__control">
            <button className="player__btn player__shuffle">
                <img src={buttons.shuffleBtn} alt="" />
            </button>
            <button
                className="player__btn player__pre"
                onClick={() => handlePre()}
            >
                <img src={buttons.preBtn} alt="" />
            </button>
            <button
                className="player__btn player__play"
                onClick={() => handlePlay()}
            >
                <img
                    src={isPlaying ? buttons.pauseBtn : buttons.playBtn}
                    alt=""
                />
            </button>
            <button
                className="player__btn player__next"
                onClick={() => handleNext()}
            >
                <img src={buttons.nextBtn} alt="" />
            </button>
            <button className="player__btn player__repeat">
                <img src={buttons.repeatBtn} alt="" />
            </button>
        </div>
    );
};

export default PlayerControl;
