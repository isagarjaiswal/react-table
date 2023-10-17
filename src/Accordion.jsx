import React, { useState } from "react";
import "./accordion.css";
const data = [
  {
    title: "Text",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  },
  {
    title: "Image",
    description: <img src="https://source.unsplash.com/random/100x200/?girl" />,
  },
  {
    title: "Video",
    description: (
      <video controls>
        <source
          src="https://www.youtube.com/watch?v=3_CUtID1LQM"
          type="video/mp4"
        />
      </video>
    ),
  },
];

const Accordion = () => {
  return (
    <div className="main">
      <h1>React Accodrion</h1>
      <div className="Accordion">
        {/* {data.map(({ title, description }) => {
          return <Comp title={title} description={description} />;
        })} */}
        {<Comp title={"text"} description={"wzasexdrcfvgbhnj"} />}
      </div>
    </div>
  );
};

const Comp = ({ title, description }) => {
  const [isActive, setIsActive] = useState(false);

  const updateActive = (isActive) => setIsActive(!isActive);

  return (
    <div className="acc-container" onClick={() => updateActive(isActive)}>
      <span className=" title-container">
        <span className="title">{title}</span>
        <span className="symbol">{isActive ? "⬆️" : "⬇️"}</span>
      </span>
      {isActive && <span className="description">{description}</span>}
    </div>
  );
};

export default Accordion;
