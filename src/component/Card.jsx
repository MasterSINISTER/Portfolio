import React from "react";
import "./cardStyle.css";
function Card(props) {
  return (
    <>
      <div class="card-project">
        <div class="icon">
          <img src={props.imgSource} className="card-project-img"></img>
          <h3>{props.title}</h3>
        </div>
        <strong> {props.lang}</strong>
        <div class="card__body">{props.desc}</div>
        <button className="btn-visit">
          <a href={props.projectLink}>
            <span>Github</span>
          </a>
        </button>
      </div>
    </>
  );
}

export default Card;
