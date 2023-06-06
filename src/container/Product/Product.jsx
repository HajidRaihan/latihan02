import { Component, Fragment } from "react";
import "./Product.css";
import TrolyImg from "../../../src/asset/troli.png";
import CardProduct from "../CardProduct/CardProduct";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              alt=""
            />
          </div>
          <div className="troley">
            <img src={TrolyImg} alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
