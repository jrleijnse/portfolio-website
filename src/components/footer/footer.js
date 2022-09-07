const Footer = () => {
  return (
    <footer className="pv4  ph3 white ph5-m ph6-l black relative left-0 bottom-0 right-0">
      <small className="f6 db tc">
        © 2022 <b>Jeroen Leijnse</b>., All Rights Reserved
      </small>
      <div className="tc mt3">
        <a
          href="/language/"
          title="Language"
          className="f6 white dib ph2 link black dim"
        >
          Language
        </a>
        <a
          href="/terms/"
          title="Terms"
          className="f6 white dib ph2 link black dim"
        >
          Terms of Use
        </a>
        <a
          href="/privacy/"
          title="Privacy"
          className="f6 white dib ph2 link black dim"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
