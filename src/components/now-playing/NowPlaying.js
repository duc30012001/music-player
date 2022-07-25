import React, { useEffect, useRef, useState } from "react";
import style from "./nowPlaying.module.css";
import PlayerDetail from "../player-detail/PlayerDetail";
import PlayerControl from "../player-control/PlayerControl";
import { VscTrash } from "react-icons/vsc";
import defaultImg from "../../assets/default.png";

const ListSongs = ({ songs, setSongs }) => {
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isNull, setIsNull] = useState(songs.length === 0);

    const songRef = useRef();

    // Kiem tra xem danh sach con bai hat nao nua khong
    useEffect(() => {
        setIsNull(songs.length === 0);
    }, [songs]);

    const handleChooseSong = (id) => {
        // Tim thu tu cua bai hat trong danh sach
        setIndex(id);

        if (isPlaying) {
            songRef.current.autoplay = true;
        } else {
            songRef.current.autoplay = false;
        }
    };

    const handleClearSong = (e, id) => {
        e.stopPropagation();
        const newSongs = [...songs];
        newSongs.splice(id, 1);
        setSongs(newSongs);
        if (id === index) {
            setIsPlaying(false);
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
        <div className={style.container}>
            <div className={style.player}>
                <img
                    className={style.playerThumb}
                    src={songs[index]?.thumb || defaultImg}
                    alt=""
                />
                <div className={style.playerDetail}>
                    <h2 className={style.playerName}>
                        {songs[index]?.name || "Unknown"}
                    </h2>
                    <h3 className={style.playerAuthor}>
                        {songs[index]?.author || "Unknown"}
                    </h3>
                </div>
                <PlayerDetail
                    song={songRef.current}
                    setCurrentTime={setCurrentTime}
                    isNull={isNull}
                />
                <PlayerControl
                    index={index}
                    setId={setId}
                    isPlaying={isPlaying}
                    setIsPlay={setIsPlay}
                    length={songs.length}
                    song={songRef.current}
                    isNull={isNull}
                />
                <audio ref={songRef} id="song" src={songs[index]?.url} />
            </div>
            <div className={style.list}>
                <h1 className={style.listHeader}>Danh sách đang phát</h1>
                <ul className={style.listSongs}>
                    {songs?.map((song, id) => {
                        return (
                            <li
                                className={`${style.listSong} ${
                                    id === index ? "selected" : ""
                                }`}
                                key={id}
                                onClick={() => handleChooseSong(id)}
                            >
                                <img
                                    src={song?.thumb}
                                    alt=""
                                    className={style.listSongThumb}
                                />

                                <div className={style.listSongDetail}>
                                    <h3 className={style.listSongName}>
                                        {song?.name}
                                    </h3>
                                    <h4 className={style.listSongAuthor}>
                                        {song?.author}
                                    </h4>
                                </div>
                                <button
                                    className={style.listSongBtn}
                                    title="Xoa khoi danh sach"
                                    onClick={(e) => handleClearSong(e, id)}
                                >
                                    <VscTrash />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ListSongs;
