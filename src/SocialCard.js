import React from 'react';
import './SocialCard.css';
import Button from "./ButtonComponent";

const SocialCard = ({ userData }) => {
  return (
    <div className = "card"> 
      <div className = "card__title"> 
      <div class="circle">
        <p class="text">{userData.name[0], userData.name[0]}</p>
      </div>
        {userData.name}
        <div className = "card__username"> 
          {"@" + userData.username}

          <div className = "card_website"> 
            {userData.website}
          </div>
          
          <Button 
            border="none"
            color= "green"
            height = "50px"
            onClick={() => console.log("You clicked on the pink circle!")}
            radius = "5%"
            width = "200px"
            children = "MORE DETAILS"
          />

        </div>
      </div>
    </div>
  );
}

export default SocialCard;