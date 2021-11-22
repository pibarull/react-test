import React from 'react';
import './SocialCard.css';
import Button from './ButtonComponent';
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
      <Button 
        border="none"
        color= "deepskyblue"
        height = "50px"
        onClick={() => setButtonPopup(true)}
        radius = "5%"
        width = "200px"
        cursor = "pointer"
        children = "MORE DETAILS"
      />

      <Popup user = {userData} trigger={buttonPopup} setTrigger = {setButtonPopup}> 

      </Popup>
    </div>
  );
}

export default SocialCard;