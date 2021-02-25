import React, { Component } from "react";

class SignIn extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { userName, password } = this.state;

console.log(this.state)

    return (
      <div className="container">
        <div className="row justify-content-center">
          <form className="m-4">
            <h2 className="mb-4 text-center">Inloggning</h2>
            <div className="form-group">
              <label htmlFor="userName">Användarnamn:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Användarnamn..."
                name="userName"
                id="userName"
                value={userName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Lösenord:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Lösenord..."
                name="password"
                id="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-outline-primary">
                Logga in
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary ml-4"
                onClick={() => this.props.openSignUp()}
              >
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
