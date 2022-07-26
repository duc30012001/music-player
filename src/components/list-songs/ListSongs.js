import React, { useState } from "react";
import style from "./listSongs.module.css";
import { MdPlaylistAdd } from "react-icons/md";
import { TbPlaylist } from "react-icons/tb";

const ListSongs = ({ songs, setSongs }) => {
    const [hide, setHide] = useState(true);

    const handleAddSong = (song) => {
        setSongs((prev) => [...prev, song]);
    };

    return (
        <div className={style.wrapper}>
            <button
                className={style.playListBtn}
                onClick={() => setHide(!hide)}
            >
                <TbPlaylist />
            </button>

            <div
                className={`${style.container} ${hide ? `${style.hide}` : ""}`}
            >
                <h1 className={style.heading}>Tất cả bài hát</h1>
                <ul className={style.listSongs}>
                    {songs.map((song, id) => {
                        return (
                            <li key={id} className={style.song}>
                                <img
                                    src={song.thumb}
                                    alt=""
                                    className={style.thumb}
                                />

                                <div className={style.detail}>
                                    <h3 className={style.name}>{song.name}</h3>
                                    <h4 className={style.author}>
                                        {song.author}
                                    </h4>
                                </div>
                                <button
                                    className={style.addSongButton}
                                    title="Them vao danh sach dang phat"
                                    onClick={() => handleAddSong(song)}
                                >
                                    <MdPlaylistAdd />
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
