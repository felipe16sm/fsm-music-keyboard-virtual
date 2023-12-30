const keys = [
  new Key({ letter: "A", type: "white" }),
  new Key({ letter: "W", type: "black" }),
  new Key({ letter: "S", type: "white" }),
  new Key({ letter: "E", type: "black" }),
  new Key({ letter: "D", type: "white" }),
  new Key({ letter: "F", type: "black" }),
  new Key({ letter: "T", type: "white" }),
  new Key({ letter: "G", type: "black" }),
  new Key({ letter: "Y", type: "white" }),
  new Key({ letter: "H", type: "black" }),
  new Key({ letter: "U", type: "white" }),
  new Key({ letter: "J", type: "black" }),
  new Key({ letter: "K", type: "white" }),
  new Key({ letter: "O", type: "black" }),
  new Key({ letter: "L", type: "white" }),
  new Key({ letter: "P", type: "black" }),
  new Key({ letter: ";", type: "white" }),
];

const initialize = () => {
  const keyList = new KeyList(keys);

  new KeyController(keyList);
};

initialize();
