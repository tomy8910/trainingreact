import React from "react"
import { NavLink } from "react-router-dom"
import { Navbar } from "../styles"
import styled from "styled-components"

const Navlink = styled(NavLink)`
  &.active {
    font-weight:bold;
  }
`

const Nav = () => {
  return (
    <Navbar>
      <li>
        <Navlink exact to="/">Home</Navlink>
      </li>
      <li>
        <Navlink to="/battle">Battle</Navlink>
      </li>
      <li>
        <Navlink to="/popular">Popular</Navlink>
      </li>
    </Navbar>
  )
}

export default Nav
