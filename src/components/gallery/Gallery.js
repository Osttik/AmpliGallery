import React, { useState } from 'react';
import PictureCard from './PictureCard';

import './GalleryStyles.css';

export default function Gallery(props){
	const [data, setData] = useState([]);
	const [haveData, setIsData] = useState(false);
	
	if (!haveData){
		fetch("https://raw.githubusercontent.com/Osttik/AmpliContactsListLesson/MoqData/GalleryData.json")
    	.then(responce => responce.json())
    	.then(data => { 
				setIsData(true);
				setData(data.array);
			}
		);
	}

	return (
		<div className="galleryComponent">
			{data.map((item) => (
				<PictureCard 
					imgPath={item.imgPath}
					name={item.name}
					description={item.description}
				/>
			))}
		</div>
	);
}