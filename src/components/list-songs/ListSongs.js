import React, { useEffect, useRef, useState } from "react";
import "./list-songs.css";
import PlayerDetail from "../player-detail/PlayerDetail";
import PlayerControl from "../player-control/PlayerControl";

const ListSongs = ({ songs }) => {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const songRef = useRef();

    const handleChooseSong = (song) => {
        setIndex(song.id);
        if (isPlaying) {
            songRef.current.autoplay = true;
        } else {
            songRef.current.autoplay = false;
        }
    };

    const setCurrentTime = (dur) => {
        songRef.current.currentTime = dur;
    };

    const setIsPlay = (isPlay) => {
        setIsPlaying(isPlay);
    };

    const setId = (id) => {
        setIndex(id);
    };

    // Chay vong lap 2 lan de load duoc bai hat ban dau
    const [load, setLoad] = useState(0);
    useEffect(() => {
        for (let i = 0; i < 2; i++) {
            setLoad(i);
        }
    }, [load]);

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
                <PlayerDetail
                    song={songRef.current}
                    setCurrentTime={setCurrentTime}
                />
                <PlayerControl
                    index={index}
                    setId={setId}
                    isPlaying={isPlaying}
                    setIsPlay={setIsPlay}
                    length={songs.length}
                    song={songRef.current}
                />
                <audio ref={songRef} id="song" src={songs[index].url} />
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
