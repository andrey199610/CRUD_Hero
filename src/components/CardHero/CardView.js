import React, { Component } from "react";
import firebase from "../firebase/FireBaseConfig";
import "../Loading.css";
import { Card, Container, Row, Col } from "react-bootstrap";
class CardView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      heroId: this.props.match.params["id"],
      nickname: "",
      imagesUrl: "",
      real_name: "",
      origin_description: "",
      superpowers: "",
      catch_phrase: "",
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref("/herodata/" + this.state.heroId)
      .once("value")
      .then((heroes) => {
        const heroObject = heroes.val();
        this.setState({ ...heroObject, isLoading: false });
      });
  }
  render() {
    return (
      <Container>
        <Card>
          {this.state.isLoading && <div className="lds-dual-ring" />}
          {!this.state.isLoading && (
            <Row>
              <Col xs={6} md={4}>
                <Card.Img variant="top" src={this.state.imagesUrl} alt="img" />
              </Col>
              <Col xs={6} md={4}>
                <Card.Body>
                  <Card.Text>{this.state.nickname}</Card.Text>
                  <Card.Text>{this.state.real_name}</Card.Text>
                  <Card.Text>{this.state.origin_description}</Card.Text>
                  <Card.Text>{this.state.superpowers}</Card.Text>
                  <Card.Text>{this.state.catch_phrase}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          )}
        </Card>
      </Container>
    );
  }
}

export default CardView;
