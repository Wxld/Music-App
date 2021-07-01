import React from "react";

const LibrarySong = ({
  songs,
  song,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  setSongs,
  setLibraryStatus,
}) => {
  const songSelectHandler = async () => {
    //set the song as currently playing
    await setCurrentSong(song);
    setLibraryStatus(false);

    //actually playing that song
    audioRef.current.play();

    //highlight the selected song in the library
    const newSongs = songs.map((s) => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    setIsPlaying(true);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong; 