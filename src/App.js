import React, { Component } from "react";
//-------COMPONENTS-------
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductGrid from "./Components/ProductGrid";
import FrontPage from "./Components/FrontPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

class App extends Component {
  state = {
    productList: [
      {
        Name: "Trästol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Name: "Matbord",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
      {
        Name: "Gungstol",
        Description:
          "En fin handtillverkad trästol i gustaviansk stil med robust finish. Tillverkad i ek",
        Price: 2400,
      },
    ],
    showSignIn: false,
    showSignUp: false,
    showProducts: false,
  };

  render() {
    const { productList, showProducts, showSignIn, showSignUp } = this.state;

    return (
      <div className="Container">
        <Header />
        {showProducts ? (
          <ProductGrid products={productList} />
        ) : showSignIn ? (
          <SignIn />
        ) : showSignUp ? (
          <SignUp />
        ) : (
          <FrontPage />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
