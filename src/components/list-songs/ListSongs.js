import React, { useEffect, useRef, useState } from "react";
import "./list-songs.css";
import buttons from "./button.js";
import button from "./button.js";
import PlayerDetail from "../player-range/PlayerDetail";

const ListSongs = ({ songs }) => {
    const [index, setIndex] = useState(0);
    const songRef = useRef();
    const [isPlay, setIsPlay] = useState(false);

    const handlePlay = () => {
        if (isPlay) {
            songRef.current.pause();
        } else {
            songRef.current.play();
        }
        setIsPlay(!isPlay);
    };

    const handleChooseSong = (song) => {
        setIndex(song.id);
        if (!isPlay) {
            songRef.current.play();
        }
    };

    return (
        <div className="container">
            <div className="player">
                <img
                    className="player__thumb"
                    src={songs[index].thumb}
                    alt=""
                />
                <h2 className="player__title">
                    {songs[index].name} - {songs[index].author}
                </h2>
                <PlayerDetail song={songRef.current} />
                <audio ref={songRef} id="song" src={songs[index].url} />
                <div className="player__control">
                    <button className="player__btn player__shuffle">
                        <img src={buttons.shuffleBtn} alt="" />
                    </button>
                    <button className="player__btn player__pre">
                        <img src={buttons.preBtn} alt="" />
                    </button>
                    <button
                        className="player__btn player__play"
                        onClick={() => handlePlay()}
                    >
                        <img
                            src={isPlay ? buttons.pauseBtn : buttons.playBtn}
                            alt=""
                        />
                    </button>
                    <button className="player__btn player__next">
                        <img src={buttons.nextBtn} alt="" />
                    </button>
                    <button className="player__btn player__repeat">
                        <img src={buttons.repeatBtn} alt="" />
                    </button>
                </div>
            </div>
            <div className="list-songs">
                <h1 className="list-songs__header">Danh sách bài hát</h1>
                <ul className="list-songs__songs">
                    {songs.map((song, index) => {
                        return (
                            <li
                                className="list-songs__song"
                                key={index}
                                onClick={() => handleChooseSong(song)}
                            >
                                <div className="list-songs__thumb">
                                    <img src={song.thumb} alt="" />
                                </div>
                                <div className="list-songs__detail">
                                    <h3 className="list-songs__name">
                                        {song.name}
                                    </h3>
                                    <h4 className="list-songs__author">
                                        {song.author}
                                    </h4>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ListSongs;
