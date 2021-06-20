import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import "./my.css";
import main from "../assets/main.jpg";

class Trash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    this.setState({ productData: JSON.parse(localStorage.getItem("list")) });
  }

  //delete item
  onRemove = (index) => {
    const updatedItems = this.state.productData.filter((elem) => {
      return index !== elem.id;
    });
    this.setState({ productData: updatedItems });
    localStorage.setItem("list", JSON.stringify(updatedItems));
     
  };

  onRestore = (index) =>{
    this.state.productData.map((e) => {
      if(e.id === index) {
        e.tempFlag = false
      }
    });
    localStorage.setItem("list", JSON.stringify(this.state.productData));
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </a>
        </nav>
            {this.state.productData && this.state.productData.length > 0 ? (
              <div className="col-sm-9">
                {console.log(">", this.state.productData)}
                {this.state.productData.map((product) => {
                  if (product.tempFlag === true) {
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

                              {/* <button onClick={this.delete.bind(this, data)}><i className="fa fa-trash" aria-hidden="true"></i></button> */}
                              <Link className="btn btn-primary_Detail mr-3" 
                              onClick={() =>{this.onRestore(product.id)}}
                              >
                                Restore
                              </Link>

                              <Link className="btn btn-primary_Detail"
                               onClick={() => {
                                this.onRemove(product.id);
                              }}>
                                Remove
                              </Link>
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
          </div>
        </div>
      </>
    );
  }
}

export default Trash;
