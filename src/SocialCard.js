import React from 'react';
import './SocialCard.css';
import { useState } from 'react'
import Popup from './Popup';

const SocialCard = ({ userData }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className = "card"> 
      <div className="circle">
        <p class="text">{userData.name[0], userData.name[0]}</p>
      </div>
      <br></br>
      <div className = "card__title"> 
        {userData.name}
      </div>
      <br></br>
      <div> 
        {"@" + userData.username}
      </div>
      <div className = "card__website"> 
        {userData.website}
      </div>
      <br></br>
      <button className = "button" onClick={() => setButtonPopup(true)}> 
      <p className = "button__text">MORE DETAILS </p>
      </button>
      <Popup user = {userData} trigger={buttonPopup} setTrigger = {setButtonPopup}> 
      </Popup>
    </div>
  );
}

export default SocialCard;