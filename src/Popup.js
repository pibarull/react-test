import React from 'react';
import './Popup.css'

function Popup(props) {
  return (props.trigger) ? (
    <div className = "popup">
      <div className = "popup__inner">
        <button className = "close__btn" onClick = {() => props.setTrigger(false)}>

          x</button>
          <p>{"- name: " + props.user.name}</p>
          <p>{"- username: " + props.user.username}</p>
          <p>{"- email: " + props.user.email}</p>
          <p>{"- phone: " + props.user.phone}</p>
          <p>{"- company: " + props.user.company.name}</p>
          <p>{"- website: " + props.user.website}</p>
          <p>{"- address: "}</p>
          <p className = "address">
            <p>{"• street: " + props.user.address.street}</p>
            <p>{"• suite: " + props.user.address.suite}</p>
            <p>{"• city: " + props.user.address.city}</p>
            <p>{"• zipcode: " + props.user.address.zipcode}</p>
          </p>
      </div>
    </div>
  ) : "";
}

export default Popup;