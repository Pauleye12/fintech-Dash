import React from "react";

function Details({ Info }) {
  return (
    <div className="dets">
      <h2>{Info.title}</h2>
      <div className="flexWrap" >

      {Info.details.map((e, index) => (
        <section key={index} className="informationDetails">
          <h3>{e.subTitle}</h3>
          <p>{e.content}</p>
        </section>
      ))}
      </div>
    </div>
  );
}

export default Details;
