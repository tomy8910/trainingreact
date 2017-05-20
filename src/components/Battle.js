import React from "react"
import { Row, Form, Button, Label, Reset } from "../styles"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PlayerPreview from "./PlayerPreview"

const Btn = styled(Link)`
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size:16px;
  border-radius: 3px;
  width:200px;
  text-align:center;
  display:block;
  padding:7px 0;
  margin: 10px auto;

  &:hover:enabled {
    background:linear-gradient(#1a1a1a,#0a0a0a);
    color:#fff;
    text-decoration: none;
  }

  &:active {
    transform: translateY(1px);
  }
`

class PlayerInput extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: ""
    }
  }

  handleChange(event) {
    const username = event.target.value
    this.setState({ username })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.onSubmit(this.props.id, this.state.username)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="username">
          {this.props.label}
        </Label>
        <input
          id="username"
          type="text"
          placeholder="github username"
          autoComplete="off"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <Button type="submit" disabled={!this.state.username}>Submit</Button>
      </Form>
    )
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      playerOneName: "",
      playerTwoName: "",
      playerOneImage: null,
      playerTwoImage: null
    }
  }

  handleSubmit(id, username) {
    this.setState(function() {
      const newState = {}
      newState[id + "Name"] = username
      newState[id + "Image"] = `https://github.com/${username}.png?size=200`
      return newState
    })
  }

  handleReset(id) {
    this.setState(function() {
      const newState = {}
      newState[id + "Name"] = ""
      newState[id + "Image"] = null
      return newState
    })
  }

  render() {
    const match = this.props.match
    const playerOneName = this.state.playerOneName
    const playerTwoName = this.state.playerTwoName
    const playerOneImage = this.state.playerOneImage
    const playerTwoImage = this.state.playerTwoImage

    return (
      <div>
        <Row>
          {!playerOneName &&
            <PlayerInput
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />}

          {playerOneImage !== null &&
            <PlayerPreview avatar={playerOneImage} username={playerOneName}>
              <Reset onClick={() => this.onReset("playerOne")}>Reset</Reset>
            </PlayerPreview>}
          {!playerTwoName &&
            <PlayerInput
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />}
          {playerTwoImage !== null &&
            <PlayerPreview avatar={playerTwoImage} username={playerTwoName}>
              <Reset onClick={() => this.onReset("playerTwo")}>Reset</Reset>
            </PlayerPreview>}
        </Row>

        {playerOneImage &&
          playerTwoImage &&
          <Btn
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}
          >
            Battle
          </Btn>}
      </div>
    )
  }
}

export default Battle
