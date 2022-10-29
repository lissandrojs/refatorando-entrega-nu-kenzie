import "../../reset.css";
import "./style.css";
import Button from "../Button";
import { useState } from "react";
import { MdAttachMoney } from "react-icons/md";


const CadastrarForm = ({ addValueList, listTransactions }) => {

  const [descripotion, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [cont, setCont] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    const newItem = {
      description: descripotion,
      type: cont,
      value: Number(value),
    };

    addValueList(newItem);
  };

  const calcAll = () => {
    let total = listTransactions.reduce((previousValue, currentValue) => currentValue.type === "saída"
          ? previousValue - currentValue.value
          : 
          previousValue + currentValue.value
          ,0);

    return total;
  };

  return (
    <div className="container-main">
      <form onSubmit={addItem} className="form__containe">
        <div className="form__containe-descript">
          <p>Descrição</p>
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Diguite aqui sua descrição"
          />
          <span>Ex: Compra de roupas</span>
        </div>

        <div className="form__containe-option">
          <div className="form__containe-value">
            <p>valor</p>
            <input
              type="number"
              placeholder="1"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div className="form__containe-select">
            <p>valor</p>
            <select
              onChange={(e) => setCont(e.target.value)}
              className="seletor"
              name="select"
            >
              <option value="entrada" selected>
                {" "}
                Entrada
              </option>
              <option value="saída">Despesas</option>
            </select>
          </div>
        </div>
        <Button
          type="submit"
          className="btn-container"
          Children="Inserir Valor"
        />
      </form>
      <div className="valorTotal" Children="Inserir Valor">
        <p className="paragrafo-texto">Valor Total</p>
        <p className="paragrafo-valor">
          <MdAttachMoney className="cifrao" />
          {calcAll()}
        </p>
      </div>
    </div>
  );
};
export default CadastrarForm;
