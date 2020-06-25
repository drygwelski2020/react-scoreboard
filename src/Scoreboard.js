import React, { Component } from 'react'

export class Scoreboard extends Component {
  // Initialize our state
  state = {
    score: 0,
  }

  // Make arrow functions for any buttons that do 'actions'
  handleClickAddToScore = () => {
    const newScore = this.state.score + 1
    // call this.setState to change state
    // Provide it with a new version of the object
    // at least with the property and value to change
    this.setState({ score: newScore })
  }

  handleClickSubtractFromScore = () => {
    const newScore = this.state.score - 1
    // call this.setState to change state
    // Provide it with a new version of the object
    // at least with the property and value to change
    this.setState({ score: newScore })
  }

  render() {
    console.log(this.state)
    return (
      <section className="team1">
        <h2 className="team1name" id="team1named">
          {this.props.teamName}
        </h2>
        <h3 className="team1Score" id="h3tag1">
          {this.state.score}
        </h3>
        <fieldset>
          <input className="team1input" type="text" placeholder="Name" />
        </fieldset>

        <fieldset>
          <i
            onClick={this.handleClickAddToScore}
            className="add fas fa-2x fa-plus-circle"
          ></i>
          <i
            onClick={this.handleClickSubtractFromScore}
            className="subtract fas fa-2x fa-minus-circle"
          ></i>
        </fieldset>
      </section>
    )
  }
}
