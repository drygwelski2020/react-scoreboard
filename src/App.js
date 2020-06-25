import React, { Component } from 'react'

class Scoreboard extends Component {
  render() {
    return (
      <section className="team1">
        <h2 className="team1name" id="team1named">
          {this.props.teamName}
        </h2>
        <h3 className="team1Score" id="h3tag1">
          0
        </h3>
        <fieldset>
          <input className="team1input" type="text" placeholder="Name" />
        </fieldset>

        <fieldset>
          <i className="add fas fa-2x fa-plus-circle"></i>
          <i className="subtract fas fa-2x fa-minus-circle"></i>
        </fieldset>
      </section>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>My Score Board</h1>
        </header>
        <main>
          <Scoreboard teamName="SDG C#-ers" />
          <Scoreboard teamName="SDG JS-ers" />
          <Scoreboard teamName="SDG Staff" />
          <div>
            <button type="button">Reset Scores</button>
          </div>
        </main>
      </>
    )
  }
}

export default App
