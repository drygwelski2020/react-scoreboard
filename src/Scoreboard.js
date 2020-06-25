import React, { Component } from 'react'

export class Scoreboard extends Component {
  // Initialize our state
  state = {
    score: 0,
    name: this.props.teamName,
  }

  // Make arrow functions for any buttons that do 'actions'
  handleClickAddToScore = () => {
    const newScore = this.state.score + 1
    // call this.setState to change state
    // Provide it with a new version of the object
    // at least with the property and value to change
    if (newScore < 0) {
      return
    }
    this.setState({ score: newScore })
  }

  handleClickSubtractFromScore = () => {
    const newScore = this.state.score - 1
    // call this.setState to change state
    // Provide it with a new version of the object
    // at least with the property and value to change
    if (newScore < 0) {
      return
    }
    this.setState({ score: newScore })
  }

  handleChangingName = event => {
    const inputFieldThatIsChanging = event.target
    const valueOfThatInputField = inputFieldThatIsChanging.value
    this.setState({ name: valueOfThatInputField })
  }

  handleUpdateSliderLongForm = event => {
    const sliderThatChanged = event.target
    const valueOfTheSlider = parseInt(sliderThatChanged.value)

    this.setState({ score: valueOfTheSlider })
  }

  handleUpdateSlider = event => {
    this.setState({ score: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <section className="team1">
        <h2 className="team1name" id="team1named">
          {this.state.name}
        </h2>
        <h3 className="team1Score" id="h3tag1">
          {this.state.score}
        </h3>
        <fieldset>
          <input
            className="team1input"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChangingName}
          />
        </fieldset>

        <input
          type="range"
          min="0"
          max="100"
          value={this.state.score}
          //onChange={event => this.setState({ score: parseInt(event.target.value) })}
          onChange={this.handleUpdateSlider}
        />

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
