import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const myelement = (
  <body>
    <div class="main-div">
      <h1>ORDER DETAILS</h1>
      <hr></hr>

      <h1>Facilitation Skills for Business Analysts</h1>
      <h4>Hong Kong, HK</h4>
      <p>
        880 Third Avenue, 10th Floor <br />
        Hong Kong
      </p>
      <div class="gray-box1">
        <div class="col1">3 Days Course</div>
        <div class="col2"> Dec 05-07. 9am-5pm</div>
        <div class="money-col">
          <div class="amount">$1200.00</div>
          <div class="unit">USD</div>
        </div>
      </div>
      <div class="gray-box2">
        <div class="discount">
          <input class="discount-input" placeholder="    Discount code" />
        </div>
        <div class="apply-div">
          <div class="apply">
            {" "}
            <p class="apply-spam">Apply</p>{" "}
          </div>
        </div>

        <div class="payment">Payment Total</div>
        <div class="money-col">
          <div class="amount">$1200.00</div>
          <div class="unit">USD</div>
        </div>
      </div>
      <div>
        <h1>PAYMENT</h1>
        <hr></hr>
        <h4>Pay with Saved Credit Card</h4>
        <div class="container">
          <div class="circle-container">
            <div class="select-big-circle">
              <div class="inner-circle"></div>
            </div>
          </div>

          <div class="card">
            <p>
              <spam class="visa-spam">Visa</spam> ending in 1234
            </p>
          </div>
        </div>

        <h4 class="new-card">Pay with New Credit Card</h4>
        <div class="pay-now">
          {" "}
          <p class="pay-now-p">Pay Now </p>
        </div>
      </div>
    </div>
  </body>
);

ReactDOM.render(myelement, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
