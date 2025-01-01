import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate hook
import faqData from "../../../data";
import { Button } from "antd";
import { IoIosArrowBack } from "react-icons/io";

const ReadInstructions = () => {
  const { id } = useParams();
  const faqItem = faqData[id - 1];
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:px-6 bg-primary-300 min-h-screen rounded-2xl relative">
      <h1 className="text-2xl font-bold my-10 md:mb-20 md:mt-0">{faqItem.title}</h1>
      <p className="text-white/70 tracking-wider leading-7">{faqItem.details}</p>
      <img src={faqItem.image} alt="" className="h-full w-full my-10  md:my-20" />

      <div className="absolute top-3 right-6">
        <Button
          icon={<IoIosArrowBack />}
          onClick={handleGoBack}
          className="btn-style md:flex hidden"
        >
          Go Back
        </Button>
        <Button
          icon={<IoIosArrowBack />}
          onClick={handleGoBack}
          className="btn-style md:hidden flex"
        >
        </Button>
      </div>
    </div>
  );
};

export default ReadInstructions;
