import React, {  useEffect, Component } from 'react';
import {Header, Main, Article} from './components'
import Body from "./components/Body/Body.js";
import AboutMe from './Sections/AboutMe/AboutMe';
import linkedin_photo from "./Sections/AboutMe/linkedin_photo.png"


class App extends Component {


	onClickAbout(e) {
		e && e.preventDefault(); // to avoid the link from redirecting
		const elementToView = document.getElementById("about");
		elementToView.scrollIntoView(); 
		}

	render() {

	return (
	<div>
		<div id='bg'>
			<section id="wrapper">
				<Header/>
				<footer>
					<p className='learn-more actions stacked'><a className='more' href="#about" onClick={this.onClickAbout.bind(this)}>Learn More</a></p>
				</footer>
			</section>
		</div>
		<AboutMe img={linkedin_photo} />
		<Body/>	
		<footer id='footer'>
			<p className="copyright">&copy; Design: <a href="https://html5up.net" target={"_blank"}>HTML5 UP</a>.</p>
			<br/>
		</footer>
	</div>

    );
  }
}

export default App;
