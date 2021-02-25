import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <form className="m-4">
            <h2 className="mb-4 text-center">Inloggning</h2>
            <div className="form-group">
              <label for="UserName">Användarnamn:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Användarnamn..."
                id="UserName"
              />
            </div>
            <div className="form-group">
              <label for="Password">Lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Lösenord..."
                id="pwd"
              />
            </div>
            <div className="text-center mt-5">
                <button type="submit" className="btn btn-outline-primary">
              Logga in
            </button>
                <button type="button" className="btn btn-outline-secondary ml-4" onClick={() => this.props.openSignUp()}>
              Skapa konto
            </button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
