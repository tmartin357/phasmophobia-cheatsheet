import React, {Component} from 'react';


export default class ContactPage extends Component {
	
	render () {
		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px", boxShadow: '2px 2px 5px #000000' }}>
				<div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>Contact</h2>
					<br/>
					<p>This is a fork of un0btanium's Phasmophobia CheatSheet, with some adjustments I made for my playstyle. You can find the original project <a href="https://github.com/un0btanium/phasmophobia-cheatsheet">here</a>.</p>
				</div>
			</div>
		</div>
	}
}