import React, { useState } from "react";
import style from "./listSongs.module.css";
import { MdPlaylistAdd } from "react-icons/md";

const ListSongs = ({ songs, setSongs }) => {
    const handleAddSong = (song) => {
        setSongs((prev) => [...prev, song]);
    };

    return (
        <div className={style.container}>
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
                                <h4 className={style.author}>{song.author}</h4>
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
    );
};

export default ListSongs;
