import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    transform: scale(0.98);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin:0 auto;
`

const Languages = styled.ul`
  display:flex;
  justify-content: center;

  li {
    margin: 10px;
    font-weight: bold;
    cursor: pointer;
  }
`

const ListItem = styled.li`
  color: ${props => (props.selected ? "#d0021b" : "")};
 
`

const PopularList = styled.ul`
  display:flex;
  flex-wrap: wrap;
  justify-content:space-around;
`

const PopularItem = styled.li`
  margin:20px;
  text-align:center;
   visibility: ${props => (props.out ? "hidden" : "visible")};
  animation: ${props => (props.out ? fadeOut : fadeIn)} 1s linear;
  transition: visibility 1s linear;
`
const PopularRank = styled.div`
  font-size:20px;
  margin:10px;
`

const SpaceListItems = styled.ul`
  margin-bottom:7px;
  margin-top:auto;
`

const Avatar = styled.img`
  width:150px;
  border-radius:50%;
`
const LoadingAnimation = keyframes`
   0% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`

const LoadingAnimation2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  color: #5f5f5f;
  font-size: 90px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  margin: 72px auto;
  position: relative;
  transform: translateZ(0);
  animation: ${LoadingAnimation} 1.7s infinite ease, ${LoadingAnimation2} 1.7s infinite ease;
`

const Navbar = styled.ul`
  display: flex;
  li {
    margin-right:15px;
  }
`

const HomeContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Row = styled.div`
  display:flex;
  justify-content:space-around;
`
const Form = styled.form`
  display:flex;
  flex-direction:column;
  width:500px;
  align-items:center;

  input {
    border-radius: 3px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid rgba(0,0,0,0.43);
    font-size: 16px;
    width:80%;
  }

  label {
    text-align:center;
    font-size: 30px;
    font-weight:200;
  }
`

const Label = styled.label`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
`

const Button = styled.button`
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

const Column = styled.div`
   display:flex;
  flex-direction:column;
  width:500px;
  align-items:center;
`
const Reset = styled.button`
  border: none;
  background:transparent;
  color:#d0021b;
  display:block;
  width:100%;
  text-align:center;

  &:hover {
    cursor: pointer;
  }
`

const Username = styled.div`
  text-align:center;
`
const Header = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
`
const Hthree = styled.h3`
  text-align:center;
`

export {
  Container,
  Languages,
  ListItem,
  PopularList,
  PopularItem,
  PopularRank,
  SpaceListItems,
  Avatar,
  Loading,
  Navbar,
  HomeContainer,
  Row,
  Form,
  Button,
  Label,
  Column,
  Reset,
  Username,
  Header,
  Hthree
}
