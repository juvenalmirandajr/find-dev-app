import React from "react"
import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tech Stack</label>
            <input name="techs" id="techs" required />
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12603203?s=460&u=12b35b546b4dac6f986a0484ae43da70ae1ecc77&v=4" alt="Juvenal Miranda Jr."/>
              <div className="user-info">
                <strong>Juvenal Miranda Jr.</strong>
                <span>JavaScript, React.JS, Java</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia a odio at blandit. Sed mi enim, tristique quis massa eu, aliquet laoreet nisl.</p>
            <a href="https://github.com/juvenalmirandajr" target="_blank">Link to my profile on Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12603203?s=460&u=12b35b546b4dac6f986a0484ae43da70ae1ecc77&v=4" alt="Juvenal Miranda Jr."/>
              <div className="user-info">
                <strong>Juvenal Miranda Jr.</strong>
                <span>JavaScript, React.JS, Java</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia a odio at blandit. Sed mi enim, tristique quis massa eu, aliquet laoreet nisl.</p>
            <a href="https://github.com/juvenalmirandajr" target="_blank">Link to my profile on Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12603203?s=460&u=12b35b546b4dac6f986a0484ae43da70ae1ecc77&v=4" alt="Juvenal Miranda Jr."/>
              <div className="user-info">
                <strong>Juvenal Miranda Jr.</strong>
                <span>JavaScript, React.JS, Java</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia a odio at blandit. Sed mi enim, tristique quis massa eu, aliquet laoreet nisl.</p>
            <a href="https://github.com/juvenalmirandajr" target="_blank">Link to my profile on Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/12603203?s=460&u=12b35b546b4dac6f986a0484ae43da70ae1ecc77&v=4" alt="Juvenal Miranda Jr."/>
              <div className="user-info">
                <strong>Juvenal Miranda Jr.</strong>
                <span>JavaScript, React.JS, Java</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia a odio at blandit. Sed mi enim, tristique quis massa eu, aliquet laoreet nisl.</p>
            <a href="https://github.com/juvenalmirandajr" target="_blank">Link to my profile on Github</a>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App
