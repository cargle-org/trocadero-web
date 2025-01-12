import React from "react";
import styled from "styled-components";
import FAQsub from "./FAQsub";

const FAQs = () => {
  return (
    <FAQSection className={"max-w-[1500px] mx-auto px-14 xs:px-6 "}>
      <h2 className='faq-title font-semibold'>Have a question, check FAQs</h2>
      <FAQCard>
        <FAQsub
          question='What is Quicklie Distribution?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
        <FAQsub
          question='How do i create account as an agent?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
        <FAQsub
          question='How do i Know if my money is secure?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
        <FAQsub
          question='How long does it take to vet a vehicle?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
        <FAQsub
          question='How much does vetting process cost?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
        <FAQsub
          question='How do i know if my request have been answered?'
          response='The vetting process normally takes place within 24hours of make the vetting request, but might as well be more than that due to one reason or the other e.g inablity to locate the vehicle to be vet ontime whiich may be due to misinformation from the client.'
        />
      </FAQCard>
    </FAQSection>
  );
};

export default FAQs;

export const FAQSection = styled.div`
  background-color: #F7F7F7;
  padding: 7rem 4rem;
  &.open {
    opacity: 0.3;
  }
  .faq-title {
    text-align: center;
    font-size: 2rem;
    margin: 3rem auto;
  }
  @media (max-width: 768px) {
    .faq-title {
      font-size: 2rem;
    }
  }
  @media (max-width: 520px) {
    padding: 7rem 2rem;
    .faq-title {
      font-size: 1.5rem;
    }
  }
`;

export const FAQCard = styled.div`
  background-color: white;
  border: none;
  border-radius: 30px;
  width: 70%;
  margin: 1rem auto;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0 4px 4px #00000015;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const FAQLink = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  a {
    color: #ef4325;
    text-decoration: none;
    cursor: pointer;
    margin-left: 0.5rem;
    &:hover {
      color: #555555;
    }
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    white-space: nowrap;
    a {
      margin-top: 0.5rem;
      margin-left: 0;
    }
  }
`;

export const FAQGroup = styled.div`
  margin: 1rem auto;
  .faqs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem auto;
    .question {
      color: #222222;
      width: 75%;
    }
    img {
      cursor: pointer;
    }
  }
  .response {
    padding: 1.5rem 1rem 1.5rem 0;
    color: #555555;
    font-size: 0.8rem;
  }
  hr {
    border: 0.5px solid #dddddd;
  }

  @media (max-width: 768px) {
    .faqs {
      .question {
        font-size: 0.8rem;
      }
    }
    .response {
      font-size: 0.7rem;
    }
  }
`;
