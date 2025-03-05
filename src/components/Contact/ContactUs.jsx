import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

const ContactUs = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "acc69e66-d510-439b-b62a-6104576982f8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      toast.success("Form Submitted Successfuly")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (      
      <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
      className='container flex flex-col items-center justify-center w-full px-6 mx-auto overflow-hidden md:px-20 lg:px-50'>
        <div className='flex flex-col items-start py-2 md:flex-row'>
          <div className='flex flex-col items-center p-5 text-center md:text-start md:items-start mt-7'>
            <h1 className='text-2xl font-bold text-center md:text-3xl'>PT. Kaltim Diamond Coal</h1>
            <p className='mt-2 text-[14px] md:text-[20px]' >Jl. MT haryono Perum. Bukit mediterania, Perkantoran No. 23-26 Samarinda, Kalimantan Timur</p>
            <p className='mt-0.5 md:mt-2 text-[14px] md:text-[20px]'>(0541) 2088855</p>
          </div>

          <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 md:pt-8'>
            <div className='flex flex-wrap'>
              <div className='w-full pt-2 text-left md:w-1/2' id='name'>
                <h2>Name</h2>
                <input className='w-full px-4 py-3 mt-2 border border-gray-300 rounded'
                type="text" name='Name' placeholder='Muhamad Nur Ichsanudin' required/>
              </div>
              <div className='w-full pt-2 text-left md:w-1/2 md:pl-4' id='company'>
                <h2>Your Company</h2>
                <input className='w-full px-4 py-3 mt-2 border border-gray-300 rounded'
                        type="text" name='Company' placeholder='PT. Maju Sejahtera' required/>
              </div>
              <div className='w-full pt-2 text-left md:w-1/2' id='email'>
                <h2>Email</h2>
                <input className='w-full px-4 py-3 mt-2 border border-gray-300 rounded'
                        type="email" name='Email' placeholder='jhon@email.com' required/>
              </div>
              <div className='w-full pt-2 text-left md:w-1/2 md:pl-4' id='phone'>
                <h2>Phone Number</h2>
                <input className='w-full px-4 py-3 mt-2 border border-gray-300 rounded'
                        type="text" name='Phone' placeholder='081111111111' required/>
              </div>
            </div>
            <div className='my-2 text-left'>
              <h2>Message</h2>
              <textarea className='w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none'
                    name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='px-12 py-2 mb-10 text-white bg-green-500 rounded cursor-pointer' id='message'>
                    {result ? result : "Send Message"}
            </button>
          </form>
        </div>          
      </motion.div>

  )
}

export default ContactUs