class Key {
  constructor({ letter, type }) {
    this.letter = letter?.toLowerCase();
    this.type = type;

    this.createKey();
  }

  createKey() {
    const keyElement = document.createElement("div");

    keyElement.classList.add("key");
    keyElement.classList.add(this.type);

    const keyLetterElement = document.createElement("span");

    keyLetterElement.textContent = this.letter;

    keyElement.appendChild(keyLetterElement);

    this.keyElement = keyElement;

    this.keyElement.addEventListener("click", this.playAudio);
  }

  playAudio = () => {
    const audio = new Audio(`src/assets/audios/${this.letter}.wav`);

    audio.play();

    this.keyElement.classList.add("active");

    setTimeout(() => {
      this.keyElement.classList.remove("active");
    }, 150);
  };
}
