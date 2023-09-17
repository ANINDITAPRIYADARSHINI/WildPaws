import React from "react";

export default function Form({ selectedFauna }) {
  const [formData, setFormData] = React.useState({
    userName: "",
    faunaName: ""
  });

  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    console.log(formData);
  }

  return (
    <div>
      <h2>Name Your Fauna</h2>
      <h5>Be creative! 🎨</h5>
      <img
        src={`./images/${selectedFauna.coverImg}`}
        alt={selectedFauna.title}
        className="slide--img"
      />
      <div>
        {submitted ? (
          <div>
            <h2>Congratulations!{formData.userName} 🎉</h2>
            <img
              src="https://media.giphy.com/media/oRFYk5xAoe80Fzbtiu/giphy.gif"
              alt=""
              className="form--img"
            />
            <p>
              Thank you, for adopting {formData.faunaName}!
              🐾
              <br />
              It's a {selectedFauna.title} 🐾,
              scientifically known as{" "}
              {selectedFauna.scientific}! 🧪
              <br />
              You have taken a significant step towards
              protecting our precious faunas🌿.
              <br />
              Together, we can make a difference and create
              a better world 🌍 for all living creatures.
            </p>
            <p>-Thanks from all the Faunas! 🐾</p>
          </div>
        ) : (
          <div className="form--container">
            <form className="form" onSubmit={handleSubmit}>
              <fieldset className="form--title">
                My name is
              </fieldset>
              <input
                type="text"
                placeholder="Your Name"
                className="form--input"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />

              <fieldset className="form--title">
                And This Is My
              </fieldset>
              <input
                type="text"
                placeholder="This is my"
                className="form--input"
                name="faunaName"
                value={formData.faunaName}
                onChange={handleChange}
              />
              <button className="form--submit">
                Adopt
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
