import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    shoppingCart: this.props.shoppingCart,
  };

  TableBody = (props) => {
    const rows = props.shoppingCart.map((product) => {
      return (
        <tr>
          <td>{product.Name}</td>
          <td>{product.Quantity}</td>
          <td>{product.Price}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  render() {
    return (
      <div className="container flex-end fixed-bottom m-5">
        <div className="row-fluid">
          <div className="col">
            <h5>Varukorg</h5>
          </div>
        </div>
        <div className="row-fluid">
          <div className="col">
            <table>
              <thead>
                <tr>
                  <th>Namn:</th>
                  <th>Antal:</th>
                  <th>Pris:</th>
                </tr>
              </thead>
              <TableBody shoppingCart={shoppingCart} />
            </table>
          </div>
        </div>
        <div className="row-fluid">
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
