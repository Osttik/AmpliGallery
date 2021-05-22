import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './PictureCardStyles.css';

export default function PictureMoreInformation(props){

	return (
		<Popup onClose={props.close} open={props.open}>
			<div className="moreInformationCard">
				<div className="cardHeader">
					<h3>{props.name}</h3>
					<button 
						onClick={props.close} 
						className="closeButton"
					>
						x
					</button>
				</div>
				<div className="moreInformationContent">
					{props.description}
					{props.description}
					{props.description}
					{props.description}
					{props.description}
				</div>
			</div>
		</Popup>
	);
}