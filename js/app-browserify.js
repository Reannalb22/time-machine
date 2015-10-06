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

	start: 1000,

	handleForward: function(){
		
		if (!this.state.ticking){
			// this.increase = setInterval(this.forward,500),
			this.forward()
			
		}
	},

	forward: function(){
		this.setState({
			year: this.state.year + 1,
			ticking: true
		})
		this.start = this.start/1.1
		this.increase = setTimeout(this.forward,this.start)
		//using recursion by calling forward within the forward function. By dividing start by 1.1, makes numbers go faster and faster

	},

	stop: function(){
		window.clearInterval(this.increase) || window.clearInterval(this.decrease)

		this.setState({ticking:false})
	},

	handleBack: function(){
		if(!this.state.ticking){
			// this.decrease = setInterval(this.backward,500)
			this.backward()
		}
	},

	backward: function(){
		this.setState({
			year: this.state.year - 1,
			ticking: true
		})
		this.start = this.start / 1.1
		this.decrease = setTimeout(this.backward,this.start)
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


