import React, { Component } from 'react';

class Bored extends Component {
  render() {
    return (
      <div className = "container-fluid">

		<h2>
			Things to Do While Bored
		</h2>

		<ul className = "bored-list">
			<li>
				<a href="https://cultofthepartyparrot.com/">Cult of the Party Parrot</a>
			</li>
			<li>
				<a href="http://hackertyper.com/">HackerTyper</a>
			</li>
			<li>
				<a href="https://xkcd.com/">xkcd</a>
			</li>
			<li>
				<a href="https://thewikigame.com/">The Wiki Game</a>
			</li>
			<li>
				<a href="https://play.typeracer.com/">Type Racer</a>
			</li>
			<li>
				<a href="http://www.trex-game.skipser.com/">T-Rex Game</a>
			</li>
			<li>
				<a href="http://www.sanger.dk/">Pug Licking Screen</a>
			</li>
			<li>
				<a href="http://drawminos.com/">Drawminos</a>
			</li>
		</ul>
	  </div>
    );
  }
}
export default Bored;
