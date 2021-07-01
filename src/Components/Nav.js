import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus,libraryStatus}) => {
  return (
    <nav>
      <h1>Wxld</h1>
      <button onClick={() => {
        if(libraryStatus){
          setLibraryStatus(false);
          
        }else{
          setLibraryStatus(true);
        }
      }}>
        Library
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  );
};

export default Nav;