import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import Image from "next/image";

const Contact = () => {
  const [values, setValues] = useState({ email: "", message: "" });

  return (
    <div className='max-w-[1500px] mx-auto px-14 xs:px-6 my-20'>
      <ContactCard>
        <div className='flex gap-10 justify-between items-center'>
          <div className='w-1/2 sm:hidden'>
            <Image src='/images/ContactBackground.png' alt='background' width={100} height={100} className='w-full' />
          </div>
          <div className='w-1/2 sm:w-full'>
            <h2 className='font-semibold text-[25px]'>Send us a message</h2>
            <p className='text-xs font-medium text-textDark'>
              Send us a message now, and we will respond as soon as possible
            </p>
            <form className='mt-6'>
              <input
                className='w-full my-4 py-2 px-4 rounded-md text-textBlack bg-[#f8f8f8]'
                type='email'
                required
                placeholder='Enter your email address...'
                name={"email"}
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
              <textarea
                className='w-full mb-4 py-2 px-4 rounded-md text-textBlack bg-[#f8f8f8]'
                name='message'
                id='message'
                rows={6}
                placeholder='Enter your email address...'
                value={values.message}
                onChange={(e) => setValues({ ...values, message: e.target.value })}></textarea>
              <CustomButton className='font-semibold w-full'>Send Message</CustomButton>
            </form>
          </div>
        </div>
      </ContactCard>
    </div>
  );
};

export default Contact;

export const ContactCard = styled.div`
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
