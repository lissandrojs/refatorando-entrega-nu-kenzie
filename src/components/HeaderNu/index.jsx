import "./style.css";
import logo from "../../logoNu.svg";
import Button from "../Button";
const HeaderNu = () => {
  return (
    <header className="container__header">
      <img className="logo--nu" src={logo} alt="logo Nu Kenzie" />
      <Button Children="Inicio" className="btn__init"></Button>
    </header>
  );
};
export default HeaderNu;
