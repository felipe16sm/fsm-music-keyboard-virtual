class KeyList {
  containerElement = document.querySelector(".container");
  constructor(keys) {
    this.keys = keys;

    this.createPianoKeys();
    this.onKeyDown();
  }

  createPianoKeys() {
    const pianoKeysElement = document.createElement("div");

    pianoKeysElement.classList.add("piano-keys");

    const pianoWhiteKeysContainerElement = document.createElement("div");

    pianoWhiteKeysContainerElement.classList.add("piano-white-keys");

    const pianoBlackKeysContainerElement = document.createElement("div");

    pianoBlackKeysContainerElement.classList.add("piano-black-keys");

    pianoBlackKeysContainerElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("piano-black-keys")) {
        document
          .elementFromPoint(
            e.clientX,
            e.target.getBoundingClientRect().bottom + 2
          )
          .click();
      }
    });

    keys.forEach((key) => {
      if (key.keyElement.classList.contains("white")) {
        pianoWhiteKeysContainerElement.appendChild(key.keyElement);
      }

      if (key.keyElement.classList.contains("black")) {
        pianoBlackKeysContainerElement.appendChild(key.keyElement);
      }
    });

    pianoKeysElement.appendChild(pianoWhiteKeysContainerElement);
    pianoKeysElement.appendChild(pianoBlackKeysContainerElement);

    this.containerElement.appendChild(pianoKeysElement);
  }

  onKeyDown() {
    document.addEventListener("keydown", (e) => {
      this.keys.forEach((key) => {
        if (e.key === key.letter) {
          key.playAudio();
        }
      });
    });
  }

  handleVolume(volumeValue) {
    this.keys.forEach((key) => {
      key.volume = volumeValue;
    });
  }
}
