import React, { useState } from "react";
import style from "./App.module.css";
import listSongs from "./list-songs/listSongs";
import NowPlaying from "./components/now-playing/NowPlaying";
import ListSongs from "./components/list-songs/ListSongs";
import { TbPlaylist } from "react-icons/tb";

const App = () => {
    const [hide, setHide] = useState(true);
    const [songs, setSongs] = useState(listSongs);

    const setListSongs = (listSongs) => {
        setSongs(listSongs);
    };

    return (
        <div className={style.container}>
            <button
                className={style.playListBtn}
                onClick={() => setHide(!hide)}
            >
                <TbPlaylist />
            </button>
            {hide || <ListSongs songs={listSongs} setSongs={setListSongs} />}
            <NowPlaying songs={songs} setSongs={setListSongs} />
        </div>
    );
};

export default App;
