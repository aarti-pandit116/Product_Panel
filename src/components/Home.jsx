import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./my.css";
import main from "../assets/main.jpg";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShowMe: false,
      productData: [],
      searchedData: [],
      serachFlag: false
    };
  }

  componentDidMount() {
    this.setState({ productData: JSON.parse(localStorage.getItem("list")) });
  }

  Operation() {
    this.setState({
      ShowMe: !this.state.ShowMe,
    });
  }

  //delete item
  deleteItem = (index) => {
    let tempAry = this.state.productData;
    tempAry.map((e) => {
      if (e.id === index) {
        e.tempFlag = true;
      }
    });
    this.setState({ productData: tempAry });
    localStorage.setItem("list", JSON.stringify(this.state.productData));
  };

 
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" onClick={() => this.Operation()}>
            <i className="fa fa-align-justify" aria-hidden="true"></i>
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <form className="form-inline my-2 my-lg-0 pr-0 ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
             
            />
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button> */}

            {/* <Link
              to="/search"
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </Link> */}
          </form>
        </nav>

        <div className="container-fluid">
          <div className="row">
            {this.state.ShowMe ? (
              <div className="col-sm-1">
                <Link className="button button5" to="/">
                  Home
                </Link>

                <Link className="button button5" to="/trash">
                  Trash
                </Link>
              </div>
            ) : null}

            <div className="col-sm-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="1"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Price
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="2"
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Rating
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="3"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Location
                </label>
              </div>

              <div className="form-check ">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  In Stock
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Out Of Stock
                </label>
              </div>
            </div>


            {this.state.productData && this.state.productData.length > 0 && this.state.serachFlag === false? (
              <div className="col-sm-9">
                {console.log(">", this.state.productData)}
                {this.state.productData.map((product) => {
                  if (product.tempFlag === false) {
                    return (
                      <div className="col-md-3 col-3 ml-5">
                        <div className="card-deck">
                          <div className="card">
                            <img src={main} className="card-img-top" />
                            <div className="card-body">
                              <h5 className="card-title font-weight-bold">
                                {product.name}
                              </h5>

                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <p>
                                <b>Price: {product.price}</b>
                              </p>

                              {/* <div className="btn btn-primary">mewhere</div> */}

                              <Link
                                className="btn btn-primary"
                                to={`/Product/${product.id},${product.name},${product.price}`}
                              >
                                Product Detail
                              </Link>

                              {/* <button onClick={this.delete.bind(this, data)}><i className="fa fa-trash" aria-hidden="true"></i></button> */}

                              <i
                                className="fa fa-trash "
                                title="Delete Items"
                                onChange={product.tempFlag === true}
                                onClick={() => {
                                  this.deleteItem(product.id);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            ) : (
              ""
            )}

            {/* {console.log(this.state.productData)} */}

            <Link to="/add" className="btn btn-primary_Detail">
              Add Products
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
