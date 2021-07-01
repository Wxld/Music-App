import React,{useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft , faAngleRight , faPause} from "@fortawesome/free-solid-svg-icons";

const Player = ({setCurrentSong,currentSong,isPlaying,setIsPlaying,audioRef,songInfo,setSongInfo,songs,setSongs}) => {
  //event handler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  //state

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const skipHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if(direction === "skip-back"){
      if(currentIndex === 0){
        await setCurrentSong(songs[songs.length-1]);
      }else{
      await setCurrentSong(songs[currentIndex - 1]);
      }
    }else{
      await setCurrentSong(songs[(currentIndex+1)%songs.length]);
    }
    audioRef.current.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (s.id === currentSong.id) {
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
  },[currentSong]);
  const trackAnim = {
    transform : `translateX(${songInfo.animationPercentage}%)`
  };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}}className="track">
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
            onChange={dragHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p> {songInfo.duration ? getTime(songInfo.duration) : "0:00"} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => {
            skipHandler("skip-back");
          }}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => {
            skipHandler("skip-forward");
          }}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
