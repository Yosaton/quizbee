import React, { useState } from "react";

const TitleScreen = ({ selectedCharacter, changeBackground }) => {
  const [character, setCharacter] = useState("");

  const maw = require("../assets/maw.png");
  const isara = require("../assets/isara.png");
  const skeeter = require("../assets/skeeter.png");
  const sharon = require("../assets/sharon.png");
  const aaron = require("../assets/aaron.png");

  return (
    <div className="container-character-selection">
      <audio controls autoPlay="autoPlay">
        <source src="background_songs/smashbros.mp3" type="audio/mpeg"></source>
      </audio>
      <div className="choose-character-title">Choose your character</div>
      <div className="characterBoxes">
        <div
          onClick={() => {
            setCharacter({
              pic: maw,
              alias: "Maw",
            });
          }}
          className="characterBox"
        >
          Maw
          <br />
          <img src={maw} alt="maw" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: isara,
              alias: "Isara",
            });
          }}
          className="characterBox"
        >
          Isara
          <img src={isara} alt="isara" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: skeeter,
              alias: "Skeeter",
            });
          }}
          className="characterBox"
        >
          Skeeter
          <img src={skeeter} alt="skeeter" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: sharon,
              alias: "Sharon",
            });
          }}
          className="characterBox"
        >
          Sharon
          <img src={sharon} alt="sharon" />
        </div>
        <div
          onClick={() => {
            setCharacter({
              pic: aaron,
              alias: "Aaron",
            });
          }}
          className="characterBox"
        >
          Aaron
          <img src={aaron} alt="aaron" />
        </div>
      </div>
      <div className="selectedCharacterBox">
        <img
          onClick={() => {
            if (character) {
              selectedCharacter(character);
              changeBackground(false);
            }
          }}
          className="selectedBigBox"
          src={
            character.pic
              ? character.pic
              : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
          alt="selected character"
        ></img>
        <h3>{character.alias}</h3>
      </div>
      {character !== "" && (
        <h2 className="pressStartText">Press Start To Play!</h2>
      )}
    </div>
  );
};

export default TitleScreen;
