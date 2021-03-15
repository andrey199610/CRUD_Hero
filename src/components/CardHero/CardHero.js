import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";
class CardHero extends Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          width="100%"
          src={this.props.imagesUrl}
          alt="Card image"
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            {this.props.nickname}
          </Card.Title>
          <Row className="d-flex justify-content-end">
            <Link to={"/update/" + this.props.id}>
              <Button size="sm" variant="secondary">
                Update
              </Button>
            </Link>
            <Link to={"/list/" + this.props.id}>
              <Button size="sm" variant="secondary" className="ml-1">
                View
              </Button>
            </Link>
            <Button
              size="sm"
              variant="secondary"
              onClick={this.props.onClickDelete}
              className="ml-1"
            >
              Delete
            </Button>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CardHero;
