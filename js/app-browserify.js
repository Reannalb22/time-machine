// es5 and 6 polyfills, powered by babel
require("babel/polyfill")

let fetch = require('./fetcher')

let React = require('react')

var Clock = React.createClass({

	getInitialState: function(){
		return {
			year: 2015,
			ticking: false
		}
	},

	handleForward: function(){
		
		if (!this.state.ticking){
			this.increase = setInterval(this.forward,500)
		}
	},

	forward: function(){
		this.setState({
			year: this.state.year + 1,
			ticking: true
		})
	},

	stop: function(){
		window.clearInterval(this.increase) || window.clearInterval(this.decrease)

		this.setState({ticking:false})
	},

	handleBack: function(){
		if(!this.state.ticking){
			this.decrease = setInterval(this.backward,500)
		}
	},

	backward: function(){
		this.setState({
			year: this.state.year - 1,
			ticking: true
		})
	},

	render: function(){
		return (
		<div>
		<p> This is year: <span> {this.state.year} </span></p>
		<button onClick = {this.handleForward}>Future, Ahead!</button>
		<button onClick = {this.stop}>Please Stop This Party Bus.</button>
		<button onClick = {this.handleBack}>Back to the Time When...</button>
		</div>
	)}

})

React.render(<Clock/>,document.getElementById("container"))


