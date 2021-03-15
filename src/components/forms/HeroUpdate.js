import React, { Component } from "react";
import firebase from "firebase";
import "../Loading.css";

class HeroUpdate extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      isLoading: true,
      heroid: this.props.match.params["id"],
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
      .ref("/herodata/" + this.state.heroid)
      .once("value")
      .then((blogs) => {
        const bolgObject = blogs.val();
        this.setState({ ...bolgObject, isLoading: false });
      });
  }

  onFormSubmit(event) {
    event.preventDefault();
    let newHero = {
      id: this.state.heroid,
      nickname: this.state.nickname,
      imagesUrl: this.state.imagesUrl,
      real_name: this.state.real_name,
      origin_description: this.state.origin_description,
      superpowers: this.state.superpowers,
      catch_phrase: this.state.catch_phrase,
    };

    firebase
      .database()
      .ref("herodata/" + this.state.heroid)
      .set(newHero);

    this.setState({
      nickname: "",
      imagesUrl: "",
      real_name: "",
      origin_description: "",
      superpowers: "",
      catch_phrase: "",
    });
    this.props.history.push("/list");
  }

  onInputChange(event) {
    let newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <center>
          <h1>UPDATE FORM</h1>
          {this.state.isLoading && <div className="lds-dual-ring" />}
          {!this.state.isLoading && (
            <form onSubmit={this.onFormSubmit}>
              <label>nickname</label>
              <input
                type="text"
                value={this.state.nickname}
                onChange={this.onInputChange}
                name="nickname"
              />
              <br />
              <label>imagesUrl</label>
              <input
                type="text"
                value={this.state.imagesUrl}
                name="imagesUrl"
                onChange={this.onInputChange}
              />
              <br />
              <label>real_name</label>
              <input
                type="text"
                value={this.state.real_name}
                onChange={this.onInputChange}
                name="real_name"
              />
              <br />
              <label>origin_description</label>
              <input
                type="text"
                value={this.state.origin_description}
                onChange={this.onInputChange}
                name="origin_description"
              />
              <br />
              <label> superpowers</label>
              <input
                type="text"
                value={this.state.superpowers}
                onChange={this.onInputChange}
                name=" superpowers"
              />
              <br />
              <label>catch_phrase</label>
              <input
                type="text"
                value={this.state.catch_phrase}
                onChange={this.onInputChange}
                name="catch_phrase"
              />
              <br />
              <input type="submit" value="update" />
            </form>
          )}
        </center>
      </div>
    );
  }
}

export default HeroUpdate;
