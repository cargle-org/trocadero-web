import React, { useState } from "react";
import ArrowUp from "../atoms/svg/ArrowUp";
import ArrowDown from "../atoms/svg/ArrowDownIcon";
import { FAQGroup } from "./FAQs";

interface FaqGroupProps {
  question: string;
  response: string;
}

function FAQsub(props: FaqGroupProps) {
  const [openFaq, setOpenFaq] = useState<boolean>(false);

  const handleClick = () => {
    setOpenFaq(!openFaq);
  };

  return (
    <FAQGroup>
      <div className='faqs'>
        <p className='question'>{props.question}</p>
        <button onClick={() => handleClick()}>{openFaq ? <ArrowUp /> : <ArrowDown />}</button>
      </div>
      {openFaq && <p className='response'>{props.response}</p>}
      <hr />
    </FAQGroup>
  );
}

export default FAQsub;
