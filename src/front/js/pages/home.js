import React, { useContext } from "react";
import MyImg from "/workspace/Portfolio/src/front/img/IMG_6011.jpg"
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<h1>
				<img src={MyImg} className="myimg" />
				David Dodson
			</h1>

			<p>
				This is my portfolio, and the creativity in my front-end work, enjoy!
			</p>

		</div>
	);
};
