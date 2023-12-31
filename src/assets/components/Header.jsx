import logo_paris from "../img/logo_paris.png";

const Header = () => {
  return (
    <header>
      <div className="container grey-border">
        <p>Les prénoms des bébés de Paris </p>
        <img
          src={logo_paris}
          alt="Logo Paris"
          width="100px"
          className="xs-hidden sm-visible"
        />
      </div>
    </header>
  );
};

export default Header;
