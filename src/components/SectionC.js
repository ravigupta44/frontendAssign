import React, { useState } from 'react';
import '../style/SectionC.css';
import mern from "../assets/mern.jpg";
import expressjs from "../assets/expressjs.png";
import mongo from "../assets/mongo.jpg";
import nodejs from "../assets/nodejs.jpg";
import reactjs from "../assets/reactjs.jpg";


function SectionC() {
    return (
        <div className="sectionC">
            <ToggleText />
            <ImageGallery />
            <BackgroundColorChanger />
        </div>
    );
}

function ToggleText() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="taskOne">
            <text className="taskOne-heading">Click to see the text</text>
            <button className="taskOne-submit" onClick={() => setVisible(!visible)}>Toggle Text</button>
            {visible && <p className="taskOne-result">This is the hidden text.</p>}
        </div>
    );
}

function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        reactjs,
        nodejs,
        expressjs,
        mongo,
        mern
    ];

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="taskOne">
            <text className="taskTwo-heading">Image Gallery</text>
            <img src={images[currentIndex]} alt="Gallery" className="gallery-image" />
            <div className="buttonContainer">
            <button className="taskOne-submit" onClick={prevImage}>Previous</button>
            <button className="taskOne-submit" onClick={nextImage}>Next</button>
            </div>
            
        </div>
    );
}

function BackgroundColorChanger() {
    const [color, setColor] = useState('');

    return (
        <div className="taskOne">
        <text className="taskThree-heading">Background Picker</text>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <div className="color-box" style={{ backgroundColor: color }}></div>
        </div>
    );
}

export default SectionC;
