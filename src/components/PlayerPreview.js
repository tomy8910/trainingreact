import React from "react"
import { Avatar, Column, Username } from "../styles"
import PropTypes from "prop-types"

const PlayerPreview = props => {
  return (
    <div>
      <Column>
        <Avatar src={props.avatar} alt={`Avatar for ${props.username}`} />
        <Username>@{props.username}</Username>
      </Column>

      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PlayerPreview
