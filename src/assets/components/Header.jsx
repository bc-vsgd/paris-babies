import logo_paris from "../img/Logo_Paris.png";

const Header = () => {
  return (
    <header>
      <div>
        Les prénoms des bébés de Paris{" "}
        <img src={logo_paris} alt="Logo Paris" width="100px" />
      </div>
    </header>
  );
};

export default Header;
