import { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/1/6/5bf6d68b-bffc-49fe-b6a8-b3821260edb0.png"
            alt=""
          />
        </div>
        <p className="product-title">Daging Ayam berbumbu Madura Maknyuss</p>
        <p className="product-price">Rp. 410.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
