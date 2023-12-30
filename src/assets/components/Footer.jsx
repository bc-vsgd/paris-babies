import logo_react from "../img/logo_react.png";
import logo_reacteur from "../img/Logo_Reacteur.avif";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          <span>Made with </span>
          <a
            href="https://react.dev/blog/2023/03/16/introducing-react-dev"
            target="_blank"
          >
            <img src={logo_react} alt="Logo React" />
            React
          </a>
          <span>at </span>
          <a href="https://www.lereacteur.io/" target="_blank">
            <img src={logo_reacteur} alt="Logo Le Reacteur" />
            Le Reacteur
          </a>
        </p>
        <p>
          <span>by </span>
          <a href="https://github.com/bc-vsgd" target="_blank">
            Benoît Charles <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/beno%C3%AEt-charles-b641672a6/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
