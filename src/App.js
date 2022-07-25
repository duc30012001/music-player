import React, { useState } from "react";
import style from "./App.module.css";
import listSongs from "./listSongs";
import NowPlaying from "./components/now-playing/NowPlaying";
import ListSongs from "./components/list-songs/ListSongs";

const App = () => {
    const [songs, setSongs] = useState(listSongs);

    const setListSongs = (listSongs) => {
        setSongs(listSongs);
    };

    return (
        <div className={style.container}>
            <NowPlaying songs={songs} setSongs={setListSongs} />
            <ListSongs songs={listSongs} setSongs={setListSongs} />
        </div>
    );
};

export default App;
