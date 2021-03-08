import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    shoppingCart: this.props.shoppingCart,
    showCart: false,
  };

  showCart = () => {
    if (this.state.showCart === false) {
      this.setState({ showCart: true });
    } else {
      this.setState({ showCart: false });
    }
  };

  render() {
    const { showCart } = this.state;

    let itemCount = this.props.shoppingCart.length;
    let tBodyContent;

    if (this.props.shoppingCart.length > 0) {
      tBodyContent = this.state.shoppingCart.map((product) => {
        return (
          <tr className=" d-flex">
            <td className="mr-2 d-flex-fill">{product.Name}</td>
            <td className="mr-2 d-flex-fill">{product.Quantity}</td>
            <td className="mr-2 d-flex-fill">{product.Price}</td>
          </tr>
        );
      });
    } else {
      tBodyContent = (
        <tr>
          <td className="text-center" rowSpan="3">Varukorgen är tom</td>
        </tr>
      );
    }

    return (
      <div className="container">
        {showCart ? (
          <div className="m-5 p-2 shadow bg-dark text-light rounded-sm" id="shoppingCart">
            <div className="row-fluid">
              <div className="col text-center">
                <h5>Varukorg</h5>
              </div>
            </div>
            <div className="row-fluid">
              <div className="col">
                <table className="mb-2 p-2">
                  <thead>
                    <tr className="d-flex">
                      <th className="mr-2 d-flex-fill">Namn:</th>
                      <th className="mr-2 d-flex-fill">Antal:</th>
                      <th className="mr-2 d-flex-fill">Pris:</th>
                    </tr>
                  </thead>
                  <tbody>{tBodyContent}</tbody>
                </table>
              </div>
            </div>
            <div className="row-fluid ">
              <div className="col text-center">
                <button className="btn-sm btn-outline-success mr-2">
                  Gå vidare
                </button>
                <button
                  className="btn-sm btn-outline-danger"
                  onClick={this.showCart}
                >
                  Stäng
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-outline-primary shadow"
            id="shoppingCartBtn"
            onClick={this.showCart}>
            Varukorg<span className="badge badge-dark ml-2">{itemCount}</span>{" "}
          </button>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
