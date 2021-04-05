import React, { Component } from "react";
import firebase from "../firebase/FireBaseConfig";
import { Container, Form, Button } from "react-bootstrap";

class AddNewHero extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      nickname: "",
      imagesUrl: "",
      real_name: "",
      origin_description: "",
      superpowers: "",
      catch_phrase: "",
    };
  }

  generateId() {
    return btoa(Math.random()).substring(0, 12);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const id = this.generateId();
    let newHero = {
      id: id,
      nickname: this.state.nickname,
      real_name: this.state.real_name,
      imagesUrl: this.state.imagesUrl,
      origin_description: this.state.origin_description,
      superpowers: this.state.superpowers,
      catch_phrase: this.state.catch_phrase,
    };
    firebase
      .database()
      .ref("herodata/" + id)
      .set(newHero);
    this.props.history.push("/list");
  }

  onInputChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <Container className="d-flex justify-content-center">
        <Form.Group style={{ width: "22rem" }}>
          <h1>ADD FORM</h1>
          <form onSubmit={this.onFormSubmit}>
            <Form.Control
              size="sm"
              type="text"
              placeholder="nickname"
              onChange={this.onInputChange}
              name="nickname"
              required
            />
            <br />
            <Form.Control
              size="sm"
              type="text"
              placeholder="imagesUrl"
              value={this.state.imagesUrl}
              name="imagesUrl"
              onChange={this.onInputChange}
              required
            />
            <br />
            <Form.Control
              size="sm"
              type="text"
              value={this.state.real_name}
              onChange={this.onInputChange}
              name="real_name"
              placeholder="real_name"
              required
            />
            <br />
            <Form.Control
              size="sm"
              type="text"
              value={this.state.origin_description}
              onChange={this.onInputChange}
              name="origin_description"
              placeholder="origin_description"
              required
            />
            <br />
            <Form.Control
              size="sm"
              type="text"
              value={this.state.superpowers}
              onChange={this.onInputChange}
              name="superpowers"
              placeholder="superpowers"
              required
            />

            <br />
            <Form.Control
              size="sm"
              type="text"
              value={this.state.catch_phrase}
              onChange={this.onInputChange}
              name="catch_phrase"
              placeholder="catch_phrase"
              required
            />
            <br />
            <Button variant="primary" type="submit" value="add">
              Add
            </Button>
          </form>
        </Form.Group>
      </Container>
    );
  }
}

export default AddNewHero;
