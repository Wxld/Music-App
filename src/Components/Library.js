import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus?"active-library":""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            songs={songs}
            song={song}
            audioRef={audioRef}
            key={song.id}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
            setLibraryStatus={setLibraryStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;