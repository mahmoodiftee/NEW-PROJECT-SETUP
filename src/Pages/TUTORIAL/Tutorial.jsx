import React from "react";
import { Collapse, Button } from "antd";
import { Link } from "react-router-dom";
import faqData from "../../../data"; // Import your data file

const Tutorial = () => {
  const items = faqData.map((item, index) => ({
    key: index + 1,
    label: item.title,
    children: (
      <div className="space-y-2">
        <h1 className="text-start text-base mt-2 mb-6">{item.details}</h1>
        <div className="flex justify-center space-x-4">
          <Link to={`/read-instructions/${index + 1}`}>
            <Button className="btn-style">Read Instructions</Button>
          </Link>
          <Link to={`/watch-tutorial/${index + 1}`}>
            <Button className="btn-style">Watch Tutorial</Button>
          </Link>
        </div>
      </div>
    ),
  }));

  return (
    <div className="space-y-4">
      <h1 className="text-center text-3xl font-bold">Tutorials</h1>
      <Collapse accordion items={items} />
    </div>
  );
};

export default Tutorial;
