import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import main from "../assets/main.jpg";

const Details = (props) => (
  <div className="Detail">
    {console.log(props)}
    <div className="container-fluid">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="Detail_header_text">
          <h1>You are on Product Detail Page</h1>
        </div>
      </nav>
      <div className="row">
        <div className="col-4">
          <img src={main} className="Detail_image" alt={main} />
        </div>

        <div className="col-6">
          <div className="card-deck">
            <div className="Card_data">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  <u> Title: {props.match.params.name} </u>
                </h5>
                <p className="card-text">
                  Some me quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <p>
                  <h3>
                    <b>Price:{props.match.params.price}</b>
                  </h3>
                </p>
                {/* <i
                  class="fa fa-trash"
                  to={`/Details/${props.id}`}
                  aria-hidden="true"
                ></i> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Details;
