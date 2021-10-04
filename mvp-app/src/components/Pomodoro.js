import React, { useState, useEffect } from "react";
import Setting from "./Setting";

function Home() {
	const [minutes, setMinutes] = useState(0); //track minute counter
	const [seconds, setSeconds] = useState(10); //track sec counter
	const [displayMessage, setDisplayMessage] = useState(false);
	//let [inputTime, setInputTime] = useState("");
	const [start, setStart] = useState(false);
	const [setting, setSetting] = useState(false);
	useEffect(() => {
		if (start) {
			let interval = setTimeout(() => {
				//clearInterval(interval);

				if (seconds === 0) {
					if (minutes !== 0) {
						setSeconds(59);
						setMinutes(minutes - 1);
					} else {
						// let minutes = displayMessage ? 24 : 4; //24- restart the timer //4 minits for break time
						// let seconds = 59;

						// setSeconds(seconds);
						// setMinutes(minutes);
						setDisplayMessage(!displayMessage); //
					}
				} else {
					setSeconds(seconds - 1); //if second is not === 0 lower them by 1
				}
			}, 1000); //every 1000 milisecond
		}
	}, [seconds]); //seconds

	const timerMinutes = minutes < 10 ? `0${minutes}` : minutes; //to have double digits on minute property
	const timerSeconds = seconds < 10 ? `0${seconds}` : seconds; //to have double digits on sec property

	const startTime = () => {
		setStart(true);
		console.log("Start button clicked");

		console.log("in set interval");
		console.log(seconds, minutes);

		if (seconds === 0) {
			if (minutes !== 0) {
				setSeconds(59);
				setMinutes((state) => state - 1);
			} else {
				let minutesOne = displayMessage ? 1 : 1; //24- restart the timer //4 minits for break time
				let secondsOne = 59;

				setSeconds(secondsOne);
				setMinutes(minutesOne);
				setDisplayMessage(!displayMessage); //
			}
		} else {
			// setSeconds(seconds - 1); //if second is not === 0 lower them by 1
			setSeconds((state) => state - 1);
			console.log("last");
		}
	};

	return (
		<div className="pomodoro1">
			<div className="card-body">
				<h1 className="title">Pomodoro</h1>
				<span>
					<button onClick={() => setSetting(true)}>Setting</button>
				</span>
				<div className="pomodoro">
					<div className="message">
						{displayMessage && <div>Break time!</div>}
					</div>
					<div className="timer">
						<button
							type="button"
							className="btn btn-primary btn-lg"
							onClick={startTime}
						>
							Start
						</button>
						<button
							type="button"
							className="btn btn-primary btn-lg"
							onClick={() => setStart(false)}
						>
							Pause
						</button><br/>
                        <h2 className="time">{timerMinutes}:{timerSeconds}</h2>
						<Setting trigger={setting} setTrigger={setSetting}></Setting>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
