import React from 'react'
import { BrowserRouter, Match } from 'react-router'

import { ajaxRequest } from './utils/ajax-request'

import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Profile from './components/Profile'

const clickApi = '/api/clicks'
const profileApi = '/api/profile'

class App extends React.Component {
  state = {
      id: '',
      username: '',
      displayName: '',
      publicRepos: '',
      clicks: 0
  }

  componentDidMount() {
    ajaxRequest('GET', profileApi, (profileData) => {
      ajaxRequest('GET', clickApi, (clickData) => {
        const { id, username, displayName, publicRepos } = JSON.parse(profileData)
        const { clicks } = JSON.parse(clickData)
        this.setState({
          id,
          username,
          displayName,
          publicRepos,
          clicks
        })
      })
    })
  }

  handleCountClick = () => {
    ajaxRequest('POST', clickApi, () => {
       ajaxRequest('GET', clickApi, (clickData) => {
         this.setState({
           clicks: JSON.parse(clickData).clicks
         })
       })
    })
  }

  handleResetClick = () => {
    ajaxRequest('DELETE', clickApi, () => {
       ajaxRequest('GET', clickApi, (clickData) => {
         this.setState({
           clicks: JSON.parse(clickData).clicks
         })
       })
    })
  }
  
  render() {
    const { id, username, displayName, publicRepos, clicks } = this.state

    return (
      <BrowserRouter>
        <div>
          <NavigationBar/>

          <div className="container">
            <div className="text-center">

              <Match exactly pattern="/" component={() => (
                <Home {...{ displayName, clicks }}
                      handleCountClick={this.handleCountClick}
                      handleResetClick={this.handleResetClick}/>
              )}/>
              <Match pattern="/profile" component={() => (
                  <Profile  {...{ id, username, displayName, publicRepos }}/>
              )}/>

            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
