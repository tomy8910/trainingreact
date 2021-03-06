import axios from "axios"

const id = "8d902ce06ee4cdfdf99e"
const secret = "8698057da25a62501650d9f900e69ea431ffcc28"
const params = `?client_id=${id}&client_secret=${secret}`

const getProfile = username => {
  return axios
    .get(`https://api.github.com/users/${username}${params}`)
    .then(user => {
      return user.data
    })
}

const getRepos = username => {
  return axios.get(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
}

const getStarCount = repos => {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)
  return followers * 3 + totalStars
}

const handleError = error => {
  console.warn(error)
  return null
}

const getUserData = player => {
  return axios.all([getProfile(player), getRepos(player)]).then(data => {
    let [profile, repos] = data
    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

const sortPlayers = players => {
  return players.sort((a, b) => {
    return b.score - a.score
  })
}

const fetchPopularRepos = language => {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  )

  return axios.get(encodedURI).then(response => response.data.items)
}

const battle = players => {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError)
}

export { battle, fetchPopularRepos }
