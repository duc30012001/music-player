import React, { useState } from "react";
import ListSongs from "./components/list-songs/ListSongs";
import listSongs from "./listSongs";

const App = () => {
    const [songs, setSongs] = useState(listSongs);
    return (
        <div>
            <ListSongs songs={songs} />
        </div>
    );
};

export default App;
