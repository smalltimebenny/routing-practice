import {BrowserRouter, Routes, Route, Link, redirect, useParams} from 'react-router-dom'
import './App.css';

const Blank = (props) => {
	return redirect("/home");
}

const Home = (props) => {
	return (
		<>
			<h1>Welcome!</h1>
		</>
		)
	
}

const Entry = (props) => {
	const entry =useParams();
	
	let result = (data) => {return isNaN(data) ? `The word is: ${data}.` : `The number is: ${data}.`};
	
	return <h1>{result(entry.entry)}</h1>
}

const Colors = (props) => {
	const {coler} =useParams();
	const {colur} =useParams();
	const {worrd} =useParams();
	
	return <h1 style = {{backgroundColor: `${colur}`, color:`${coler}`}}>{worrd}</h1>;
}

function App() {
	return (
		<BrowserRouter>
		<div className="App">
			<Routes>
				<Route path="/" element={<Blank />} />
				<Route path="/home" element={<Home />} />
				<Route path="/:entry" element={<Entry />} />
				<Route path="/:worrd/:coler/:colur" element={<Colors />}/>
			</Routes>
			
		</div>
		</BrowserRouter>
	);
}

export default App;
