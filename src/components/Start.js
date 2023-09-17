export default function Start(props) {
  const styles = {
    background:
      "linear-gradient(90deg, #ACB992 1.18%, #F3DEBA 100%)",
    width: "auto",
    height: "100%",
    overflow: "hidden"
  };

  return (
    <div className="start" style={styles}>
      <header>
        <h2>
          Wild Paws
          <img src={props.logo} alt="" className="logo" />
        </h2>
      </header>
      <section className="card">
        <div className="card--left">
          <h2 className="card--title">
            Adopt a wild animal, Be their voice & Save a
            life
          </h2>
          <p className="card--desc">
            By adopting a wild animal, you can make a
            positive impact on their life and help preserve
            their species. Our mission is to encourage
            people to choose adoption as the first option
            and to raise awareness about the importance of
            wildlife conservation. We believe that every
            wild animal deserves a chance to live a happy
            and healthy life, and by adopting them, you can
            be their voice and help save their life. Join us
            in our mission to protect and preserve wildlife
            by adopting a wild animal today.
          </p>
        </div>
        <div>
          <img
            src={`../images/${props.motto}`}
            className="card--motto"
            alt=""
          />
        </div>
      </section>
      <button className="btn" onClick={props.onAdopt}>
        Adopt A Life
      </button>
    </div>
  );
}
