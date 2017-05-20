import React from "react"
import { render } from "react-dom"
import { injectGlobal } from "styled-components"
import App from "./components/App"

/* eslint-disable */
injectGlobal` 
  body {
    font-family: -apple-system, BlinksMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif
  }  

  ul {
    padding: 0;
    list-style-type:none;
  }

  a {
    text-decoration: none;
    color: #d0021b;
    
  }
`
/* eslint-enable */

render(<App />, document.querySelector("#root"))
