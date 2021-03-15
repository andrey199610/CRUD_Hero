import React, { Component } from "react";
import CardHero from "./CardHero";
import firebase from "../firebase/FireBaseConfig";
import "../Loading.css";
import { CardColumns, Container } from "react-bootstrap";

class CardHeroAll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      heroList: [],
    };
    this.onClickDelete = this.onClickDelete.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    firebase
      .database()
      .ref("/herodata")
      .once("value")
      .then((herodates) => {
        let newHeroList = [];
        const bolgsObject = herodates.val();
        for (const herodate in bolgsObject) {
          newHeroList = [...newHeroList, bolgsObject[herodate]];
        }
        this.setState({ heroList: newHeroList, isLoading: false });
      });
  }

  onClickDelete(id) {
    firebase
      .database()
      .ref("herodata/" + id)
      .remove();
    this.getData();
  }
  render() {
    return (
      <Container className="mt-5 ">
        <CardColumns>
          {this.state.isLoading && <div className="lds-dual-ring" />}
          {!this.state.isLoading &&
            this.state.heroList.map((hero) => {
              return (
                <CardHero
                  key={hero.id}
                  {...hero}
                  onClickDelete={() => {
                    this.onClickDelete(hero.id);
                  }}
                />
              );
            })}
        </CardColumns>
      </Container>
    );
  }
}

export default CardHeroAll;
