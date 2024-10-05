// import React from 'react'
// import SectionTitle from '../../components/SectionTitle'
// import { useSelector } from 'react-redux';
// function Contact() {

//   const { portfolioData } = useSelector((state) => state.root)
//   const { contact } = portfolioData

//   return (
//     <div>
//       <SectionTitle title="Say Hello" />

//       <div className='flex sm:flex-col items-center justify-between '>
//         <div className='flex flex-col gap-1 '>
//           <h1 className='text-tertiary' >{"{"}</h1>
//           {Object.keys(contact).map((key) => (
//             <h1 className='ml-5' >
//               <span className='text-tertiary'>{key}:</span>
//               <span className='text-tertiary'>{contact[key]}</span>
//             </h1>
//           ))}
//           <h1 className='text-tertiary'>{"}"}</h1>
//         </div>
//         <div className='h-[400px]' >
//           <lottie-player src="https://lottie.host/cbe6be24-f5b9-4a57-be96-5e09a349bb72/IkM4XsrHxo.json" background="##FFFFFF" speed="1"
//             autoplay direction="1"
//             mode="normal">
//           </lottie-player>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  // Extracting only the required fields
  const { name, age, gender, email, address, mobile } = contact;

  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className='flex sm:flex-col items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Name:</span>
            <span className='text-tertiary'> {name}</span>
          </div>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Age:</span>
            <span className='text-tertiary'> {age}</span>
          </div>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Gender:</span>
            <span className='text-tertiary'> {gender}</span>
          </div>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Email:</span>
            <span className='text-tertiary'> {email}</span>
          </div>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Address:</span>
            <span className='text-tertiary'> {address}</span>
          </div>
          <div className='ml-5'>
            <span className='text-tertiary font-bold'>Mobile:</span>
            <span className='text-tertiary'> {mobile}</span>
          </div>
        </div>
        <div className='h-[400px]'>
          <lottie-player
            src="https://lottie.host/cbe6be24-f5b9-4a57-be96-5e09a349bb72/IkM4XsrHxo.json"
            background="transparent"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
