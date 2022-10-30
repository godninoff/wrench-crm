import Header from "./Header";
import Menu from "./Menu";
import React from "react";
import {
  AddressSuggestions,
  DaDataSuggestion,
  DaDataAddress,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import search from "../public/images/searchButton.svg";
import Image from "next/image";

const Address = () => {
  const [value, setValue] = React.useState<
    DaDataSuggestion<DaDataAddress> | undefined
  >();

  const token = "f70aa33f3ecc457d2483a49ada2d88853dee9c03";
  const id = React.useId();

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <div className="address-container">
          <h2 className=""> Поиск адресов</h2>
          <p>Введите интересующий вас адрес</p>
          <div className="search-container">
            <AddressSuggestions
              inputProps={{
                placeholder: "Введите интересующий вас адрес",
                className: "search-input",
                minLength: 3,
              }}
              token={token}
              value={value}
              onChange={setValue}
              suggestionClassName={"suggestions"}
              uid={id}
              hintText={"Адреса"}
              hintClassName={"hint"}
            />
            <button className="search-button">
              <Image style={{ marginRight: "16px" }} src={search} alt="поиск" />
              Поиск
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
