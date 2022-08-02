import React from "react";
import second from "../main/Section3/img/right.png";

export default function Card({ info }) {
  return (
    <>
      <div className="cardd " data-aos-duration="1400" data-aos="flip-left">
        <img src={info.img} width={"100%"} height={"auto"} />
        <p className="card-rang">{info.text1}</p>
        <h4 className="card-heading">{info.text2}</h4>
        <p className="text-card">{info.text3}</p>
        <p className="card-link me-3">
          Devamını Oku
          <img className="ms-2" src={second} alt="" />
        </p>
      </div>
    </>
  );
}
