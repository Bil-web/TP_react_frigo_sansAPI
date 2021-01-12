import React from "react";
import { TextField, Button } from "@material-ui/core";

import Produit from "./Produit";

class FrigoForm extends React.Component {
  // -- le state contient 2 propriétés pour stocker les 2 valeurs saisies
  state = { nom: "", qte: 1 };
  // -- stocke dans le state la valeur du nom pendant la saisie
  handleChangeNom = (event) => {
    this.setState({ nom: event.target.value });
  };
  // -- stocke dans le state la valeur de la qte pendant la saisie
  handleChangeQte = (event) => {
    this.setState({ qte: event.target.value });
  };
  // -- quand l'utilisateur valide sa saisie
  // on utilise les valeurs stockées dans le state
  // pour créer un nouveau produit
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // -- puis on utilise la méthode passée en paramètre
    // pour l'ajouter dans le frigo
    this.props.handler(new Produit(this.state.nom, this.state.qte));
    //on efface les valeurs saisies dans le formulaire
    this.setState({ nom: "", qte: 1 });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex" }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="nom"
            label="nom"
            value={this.state.nom}
            onChange={this.handleChangeNom}
            required
          />
        </div>
        <div>
          <TextField
            id="qte"
            label="qte"
            type="number"
            value={this.state.qte}
            onChange={this.handleChangeQte}
            required
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            disabled={this.state.nom === "" ? true : false}
          >
            Valider
          </Button>
        </div>
      </form>
    );
  }
}
export default FrigoForm;
