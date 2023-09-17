import React from "react";
import "./styles.css";
import Start from "./components/Start";
import data from "./data";
import Form from "./components/Form";

export default function App() {
  const styles = {
    background:
      "linear-gradient(90deg, #ACB992 1.18%, #F3DEBA 100%)",
    height: "150vh"
  };
  const [startPage, setStartPage] = React.useState(false);

  function handleStart() {
    setStartPage(true);
  }

  const [current, setCurrent] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);

  function nextSlide() {
    setCurrent((prevCurrent) =>
      prevCurrent === data.length - 1 ? 0 : prevCurrent + 1
    );
  }

  function prevSlide() {
    setCurrent((prevCurrent) =>
      prevCurrent === 0 ? data.length - 1 : prevCurrent - 1
    );
  }

  const currentItem = data[current];

  function handleButtonClick() {
    setShowForm(true);
  }

  return (
    <div className="App" style={styles}>
      {startPage ? (
        !showForm ? (
          <div>
            <h2 className="main--title">
              Whom would you like to adopt?
            </h2>
            <div className="slider">
              <div
                className="left-arrow"
                onClick={prevSlide}
              >
                ⬅
              </div>
              <div
                className="right-arrow"
                onClick={nextSlide}
              >
                ⮕
              </div>
              <div className="slide">
                <img
                  src={`./images/${currentItem.coverImg}`}
                  alt={currentItem.title}
                  className="slide--img"
                />
                <h2>{currentItem.title}</h2>
                <h3>{currentItem.scientific}</h3>
                <p>{currentItem.description}</p>
                <a
                  href={currentItem.learnUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide--map"
                >
                  Know More
                </a>
                <br />
                <button
                  className="form--submit"
                  onClick={handleButtonClick}
                >
                  Adopt This Fauna
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Form selectedFauna={currentItem} />
        )
      ) : (
        <Start
          onAdopt={handleStart}
          logo="https://media.giphy.com/media/0YQBsuELx32fr4vOGo/giphy.gif"
          motto="motto.png"
        />
      )}
    </div>
  );
}
