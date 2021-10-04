import React, { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import Calendar from "./components/Calendar";
import News from "./components/News";
import Weather from "./components/Weather";
import Pomodoro from "./components/Pomodoro"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
//import { Container } from '@material-ui/core';


function App() {
	const [image, setImage] = useState("");
	const [quotes,setQuotes] = useState("");
	const [author,setAuthor] = useState("");

	useEffect(() => {
		getImage();
		//getQuote();
	},[]);

	 useEffect(()=>{
		
		getQuote();

	},[]) ; //must put an empty [] //to take in state variable,//just run once

	const getImage = (count = 1) => {
		const apiRoot = "https://api.unsplash.com";
		const accessKey = "_FPMADePVL7dTfO_vuGSz0lKqQx_7pMygYi9wvBZzeI";
		axios
			.get(`${apiRoot}/photos/random/?client_id=${accessKey}&count=1`)
			.then((response) => {
				//        setImage(response.data.urls.full);
				//       console.log(response.data.urls.full);
				return response.data;
			})
			.then((data) => {
				setImage(data[0].urls.full);
			});
	};

	const getQuote = () =>{
		//author = data.a;
		//qoutes = data.q;
		let url= "https://quote-garden.herokuapp.com/api/v3/quotes/random";
		axios
			.get(url)
			.then((response)=>{
				//console.log(response);
				setQuotes(response.data.data[0].quoteText);
				//return response.data.data[0].quoteText;				
				//console.log(data.data.data[0].quoteText);
			})
			/* .then((data)=>{
				//setQuotes(dataquoteText);
				console.log(data.data.data[0].quoteText);
			}); */
	};

	const handleClick = ()=>{
		getQuote();
	}
	return (
		<div className="container-fluid">
			<img src={image} className="img-fluid" />
			<Router>
				<div className="fixed-top">
					<div className="card-header">
						<div className="linkers">
							<Link to="/calendar">
								<img
									src="https://image.flaticon.com/icons/png/512/616/616475.png"
									height="50"
									width="50"
								/>
							</Link>
							<Link to="/contacts">
								<img
									src="https://image.flaticon.com/icons/png/512/3771/3771518.png"
									height="50"
									width="50"
								/>
							</Link>
							<Link to="/weather">
								{" "}
								<img
									src="https://image.flaticon.com/icons/png/512/1182/1182992.png"
									height="10"
									width="50"
								/>
							</Link>
							<Link to="/news">
								{" "}
								<img
									src="https://image.flaticon.com/icons/png/512/2965/2965879.png"
									height="10"
									width="50"
								/>
							</Link>
							<Link to="/mood-tracker">
								{" "}
								<img
									src="https://image.flaticon.com/icons/png/512/3174/3174845.png"
									height="10"
									width="50"
								/>
							</Link>
							<Link to="/chatbot">
								{" "}
								<img
									src="https://image.flaticon.com/icons/png/512/4233/4233830.png"
									height="10"
									width="50"
								/>
							</Link>
							<Link to="/pomodoro">
								{" "}
								{/* link to pomodoro */}{" "}
								<img
									src="https://image.flaticon.com/icons/png/512/2553/2553210.png"
									height="10"
									width="50"
								/>
							</Link>
						</div>
					</div>
				</div>
				<Route path="/news" exact component={News} />
				<Route path="/contacts" exact component={Contacts} />
				<Route path="/calendar" exact component={Calendar} />
				<Route path="/weather" exact component={Weather} />
				<Route path="/pomodoro" exact component={Pomodoro} />
				<Route path="/" exact>
					<button className="get-quote" onClick={handleClick}>Get Quote</button>
					<h1 className="quote">{quotes}</h1>
				</Route>
			</Router>
			{/* 			<footer>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></footer>
			 */}{" "}
			{/* <div className="container-fluid"> */}
			{/* <Pomodoro /> */}
			{/* </div>   */}
			{/*  <footer>
    <center><div><small>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></small></div></center>
    </footer> */}
		</div>
	);
}

export default App;
