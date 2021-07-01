import React, { useState, useRef } from "react";
//importing styles
import "./styles/App.scss";

//importing components
import Song from "./Components/Song";
import Player from './Components/Player';
import data from "./data";
import Library from './Components/Library';
import Nav from "./Components/Nav";

function App() {
  //states
  const [libraryStatus,setLibraryStatus] = useState(false);
  const [isPlaying,setIsPlaying] = useState(false);
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage:0,
  });

  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent/roundedDuration)*100);
    setSongInfo({ ...songInfo, currentTime: current, duration,animationPercentage:animation });
  };

  const endSongHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus? "library-active":""}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioref={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={endSongHandler}
      ></audio>
    </div>
  );
}

export default App;
