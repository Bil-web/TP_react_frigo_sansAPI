import React, { Fragment } from "react";
import { List, ListItem, Card, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ExposureNeg1 from "@material-ui/icons/ExposureNeg1";
import ExposurePlus1 from "@material-ui/icons/ExposurePlus1";

import FrigoForm from "./FrigoForm";
import Produit from "./Produit";

class Frigo extends React.Component {
  // -- le state contient 2 produits
  state = {
    frigo: [new Produit("Carottes", 3), new Produit("Steack hache", 2)]
  };
  // -- methode pour ajouter un nouveau produit
  handlerAddProduit = (produit) => {
    // -- pour modifier le tableau il faut en faire une copie
    let f = [...this.state.frigo];
    // -- on cherche si le produit est déjà dans le frigo
    let i = f.findIndex((p) => produit.nom === p.nom);
    if (i !== -1) {
      // -- si le produit est présent au augmente sa qte
      f[i].qte = 0 + f[i].qte + produit.qte;
    } else {
      // -- si le produit n'est pas présent, on l'ajoute
      f.push(produit);
    }
    // -- on remplace le frigo par la copie f qui a été modifié
    this.setState({ frigo: f });
  };
  // --  supression d'un produit du frigo
  // -- l'index est la position du produit dans le tableau
  handlerDelete = (index) => {
    let f = [...this.state.frigo];
    f.splice(index, 1);
    this.setState({ frigo: f });
  };
  // -- augmenter de un la qte du produit
  // -- l'index est la position du produit dans le tableau
  handlerPlusUn = (index) => {
    let f = [...this.state.frigo];
    f[index].qte++;
    this.setState({ frigo: f });
  };
  // -- diminue de un la qte du produit
  // -- si la qte est alors égale à 0 on supprime le produit
  handlerMoinsUn = (index) => {
    let f = [...this.state.frigo];
    f[index].qte--;
    if (f[index].qte === 0) {
      f.splice(index, 1);
    }
    this.setState({ frigo: f });
  };
  render() {
    return (
      <Fragment>
        <List>
          {this.state.frigo.map((p, index) => {
            /* p est un produit et index sa position dans le tableau frigo */
            return (
              <ListItem key={index}>
                <Card style={{ width: "300px" }}>
                  {p.nom} ({p.qte})
                  <IconButton onClick={() => this.handlerDelete(index)}>
                    {/* bouton de suppression d'un produit */}
                    {/* au clic on appelle la méthode de suppression */}
                    {/* et on lui donne en param l'indice de l'elt dans le tableau */}
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                  <IconButton onClick={() => this.handlerPlusUn(index)}>
                    <ExposurePlus1></ExposurePlus1>
                  </IconButton>
                  <IconButton onClick={() => this.handlerMoinsUn(index)}>
                    <ExposureNeg1></ExposureNeg1>
                  </IconButton>
                </Card>
              </ListItem>
            );
          })}
        </List>
        {/* on passe en parametre au formulaire la méthode qui sert 
            à récupérer les valeurs saisie */}
        <FrigoForm handler={this.handlerAddProduit}></FrigoForm>
      </Fragment>
    );
  }
}
export default Frigo;
