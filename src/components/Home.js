import React from "react"
import { HomeContainer } from "../styles"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Button = styled(Link)`
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

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <h1>Github Battle: Battle your friends...and stuff.</h1>
        <Button to="/battle">
          Battle
        </Button>
      </HomeContainer>
    )
  }
}

export default Home
