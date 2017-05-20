import React from "react"
import PropTypes from "prop-types"
import {
  Languages,
  ListItem,
  PopularList,
  PopularItem,
  PopularRank,
  SpaceListItems,
  Avatar,
  Loading
} from "../styles"
import { fetchPopularRepos } from "../utils/api"

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"]

const SelectLanguage = props => {
  return (
    <Languages>
      {languages.map(lang => {
        return (
          <ListItem
            onClick={() => props.updateLanguage(lang)}
            key={lang}
            selected={props.selected === lang ? true : false}
          >
            {lang}
          </ListItem>
        )
      })}
    </Languages>
  )
}

const RepoGrid = props => {
  console.log(props)
  return (
    <PopularList>
      {props.repos.map((repo, index) => {
        return (
          <PopularItem in key={repo.name}>
            <PopularRank>#{index + 1}</PopularRank>
            <SpaceListItems>
              <li>
                <Avatar
                  src={repo.owner.avatar_url}
                  alt={`Avatar for ${repo.owner.login}`}
                />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </SpaceListItems>
          </PopularItem>
        )
      })}
    </PopularList>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

SelectLanguage.propTypes = {
  selected: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.updateLanguage = this.updateLanguage.bind(this)

    this.state = {
      selectedLanguage: "All",
      repos: null
    }
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    })

    fetchPopularRepos(this.state.selectedLanguage).then(repos => {
      this.setState({
        repos
      })
    })
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selected={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
        {!this.state.repos
          ? <Loading />
          : <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

export default Popular
