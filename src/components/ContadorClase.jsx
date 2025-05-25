import React, { Component } from "react";

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conteo: 0,
    };
  }

  incrementar = () => {
    this.setState((prevState) => ({ conteo: prevState.conteo + 1 }));
  };

  reducir = () => {
    this.setState((prevState) => ({ conteo: prevState.conteo - 1 }));
  };

  render() {
    const { conteo } = this.state;

    return (
      <div>
        <h1>Contador de clicks de clase</h1>
        <p>conteo: {conteo}</p>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.reducir}>Reducir</button>
      </div>
    );
  }
}

export default ContadorClase;
