import React, { useState } from 'react';
import PictureMoreInformation from './PictureMoreInformation';
import { TransitionGroup } from 'react-transition-group';

import './PictureCardStyles.css';

export default function PictureCard(props){
	const [isBlured, setBlured] = useState(false);
	const [isOpen, setOpen] = useState(false);

	const handleOnMouse = (isBlur) => {
		if (isBlur === isBlured)
			return;

		setBlured(isBlur)
	}

	const handleOnClose = () => {
		setOpen(false)
		setBlured(false)
	}

	return (
		<div 
			className="cardComponent" 
			onMouseLeave={() => handleOnMouse(false)} 
			onMouseOver={() => handleOnMouse(true)}
			onClick={() => setOpen(true)}
		>
			<img className={(isBlured ? "blurredImage " : "") + "image"} src={props.imgPath}/>

			{isBlured && <div className="bluredBackground">{props.name}</div>}

			<PictureMoreInformation 
				open={isOpen}
				description={props.description}
				close={handleOnClose}
				name={props.name}
			/>
		</div>
	);
}