import React, { useEffect } from "react";
import "./App.css";

function App() {
  const itemList = [
    "cupcake",
    "donut",
    "cake",
    "cookie",
    "pie",
    "pencil",
    "pen",
    "book",
    "chair",
    "table",
    "computer",
    "phone",
    "laptop",
    "mouse",
    "keyboard",
    "monitor",
    "bench",
    "taxi",
    "bus",
    "train",
    "car",
    "truck",
    "bike",
    "boat",
    "balloon",
    "rocket",
    "ship",
    "airplane",
    "helicopter",
    "tree",
    "flower",
    "house",
    "carrot",
    "apple",
    "drink",
    "restaurant",
  ];
  const styleList = [
    "an App Icon",
    "a Monogram",
    "Pictorial",
    "Luxury",
    "an Abstract",
    "Playfulness",
    "a Combination Mark",
  ];

  const [stopItem, setStopItem] = React.useState(false);
  const [stopStyle, setStopStyle] = React.useState(false);

  const [item, setItem] = React.useState("");
  const [style, setStyle] = React.useState("");

  const [loadingDots, setLoadingDots] = React.useState("");

  useEffect(() => {
    if (loadingDots.length === 4) {
      setLoadingDots("");
    } else {
      setTimeout(() => {
        setLoadingDots(loadingDots + ".");
      }, 500);
    }
  }, [loadingDots]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (stopItem === false) {
        const randomItem =
          itemList[Math.floor(Math.random() * itemList.length)];
        setItem(randomItem);
      }
      if (stopStyle === false) {
        const randomStyle =
          styleList[Math.floor(Math.random() * styleList.length)];
        setStyle(randomStyle);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [stopItem, stopStyle]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Items">
          Item:
          <p>
            <div className="Selection">{item}</div>
            <button className="Button" onClick={() => setStopItem(!stopItem)}>
              {stopItem ? "Randomize" : "Click to Stop"}
            </button>
          </p>
          Style:
          <p>
            <div className="Selection">{style}</div>
            <button className="Button" onClick={() => setStopStyle(!stopStyle)}>
              {stopStyle ? "Randomize" : "Click to Stop"}
            </button>
          </p>
        </div>
        {stopItem && stopStyle ? (
          <div className="Description">
            <h1>Description</h1>
            <p>
              Make a logo for a {item} that's in the style of {style}.
            </p>
          </div>
        ) : (
          <div className="Description">
            <h1>Description</h1>
            <p>Loading{loadingDots}|</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
