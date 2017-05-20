import React from "react"
import queryString from "query-string"
import PropTypes from "prop-types"
import { battle } from "../utils/api"
import { Loading, Row, Header, Hthree, SpaceListItems } from "../styles"
import { Link } from "react-router-dom"
import PlayerPreview from "./PlayerPreview"

const Profile = ({ info }) => {
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <SpaceListItems>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
      </SpaceListItems>
    </PlayerPreview>
  )
}

const Player = props => {
  return (
    <div>
      <Header>{props.label}</Header>
      <Hthree>Score: {props.score}</Hthree>
      <Profile info={props.profile} />
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}

class Results extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    const players = queryString.parse(this.props.location.search)
    battle([players.playerOneName, players.playerTwoName]).then(results => {
      if (results === null) {
        const error =
          "Looks like there was an error. Check that both users exist"
        const loading = false
        return this.setState({
          error,
          loading
        })
      } else {
        const error = null
        const [winner, loser] = results
        const loading = false
        return this.setState({
          error,
          winner,
          loser,
          loading
        })
      }
    })
  }

  render() {
    const { error, winner, loser, loading } = this.state
    if (loading) return <Loading />

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      )
    }
    return (
      <Row>
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </Row>
    )
  }
}

export default Results
