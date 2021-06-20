import React, { useState, useEffect, state } from "react";
import "./my.css";


//to get the data from LS
const getLocalItems = () => {
  let list = localStorage.getItem("list");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Product = (props) => {
  const [inputData, setInputData] = useState("");
  const [priceData, setPriceData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  //add data
  const addItem = () => {
    if (!inputData) {
      alert("plz fill data");
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
        price: priceData,
        tempFlag: false,
      };
      setItems([...items, allInputData]);
      setInputData("");
      setPriceData("");
    }
  };

  //delete item

  // const deleteItem = (index) => {
  //   const updatedItems = items.filter((elem) => {
  //     return index !== elem.id;
  //   });
  //   setItems(updatedItems);
  // };

  useEffect(() => {
    console.log("items....", items);
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  console.log(props);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">  </span>
        </button>
        <div className="Detail_header_text"></div>
      </nav>
      <form className="demoForm">
        <h2>Add Products</h2>

        <div className="form-group">
          <label htmlFor="text">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={priceData}
            onChange={(e) => setPriceData(e.target.value)}
          />
        </div>
        {/* <Link
          type="button"
          onClick={() =>{this.addItem()}}
          to="/"
          className="btn btn-primary_Detail"
        >
          Add
        </Link> */}
        <button type="submit"  onClick={addItem}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Product;
