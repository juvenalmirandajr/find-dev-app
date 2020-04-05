import React from "react"
import "./styles.css"

function DevItem({ dev }) {
  const name = dev.name ? dev.name : dev.github_username
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={name} />
        <div className="user-info">
          <strong>{name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="_blank">
        Link to my profile on Github
      </a>
    </li>
  )
}

export default DevItem
