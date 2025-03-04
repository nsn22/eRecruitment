import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Recprocess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-14 bg-gray-200 items-center" id='Recprocess'>
      <h1 className='mb-2 text-2xl font-bold text-center sm:text-4xl'>Recruitment <span className='font-light'>Process</span></h1>
      <p className='mx-auto mb-12 text-center text-gray-500 max-w-80'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">

            <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 border border-green-500 bg-white max-w-xl shadow-md rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Administrative Selection</h3>
                    <p className="mt-2 leading-6">After applying, KDC-Group will select your administrative files. Company only contact the candidate who meets the standar requirement from the company.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">First</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-sky-500 to-green-500">
                        </div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
            </div>

            <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-green-500 to-sky-500"></div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 max-w-xl bg-white border border-green-500 shadow-md rounded-xl col-start-6 col-end-10 mr-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Psikotest</h3>
                    <p className="mt-2 leading-6">Company will contact candidate who meets the requirement  (via WA chat) to take psikological test. The selection process will be carried out online or offline according to the company schedule.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Second</span>
                </div>
            </div>

            <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 max-w-xl bg-white border border-green-500 shadow-md rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Technical Test</h3>
                    <p className="mt-2 leading-6">If the psychological test results show that you are recommended, a capability test will be carried out according to the field you are applying for.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Third</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-sky-500 to-green-500">
                        </div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
            </div>

            <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-green-500 to-sky-500"></div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white border border-green-500 max-w-xl shadow-md rounded-xl col-start-6 col-end-10 mr-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">User Interview</h3>
                    <p className="mt-2 leading-6">You will receive an interview invitation from KDC-Group User (via WA). The selection process will be conducted online or offline.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Fourth</span>
                </div>
            </div>

            <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 max-w-xl bg-white border border-green-500 shadow-md rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Medical Checkup</h3>
                    <p className="mt-2 leading-6">The candidate will receive an medical checkup (MCU) invitation (via WA) from KDC-Group. This WA chat contains the hospital place and schedule.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Fifth</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-sky-500 to-green-500 rounded-t-ful">
                        </div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
            </div>

            <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-green-500 to-sky-500"></div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-gray-800 bg-white border border-green-500 max-w-xl shadow-md rounded-xl col-start-6 col-end-10 mr-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Offering Letter</h3>
                    <p className="mt-2 leading-6">The candidate will be contacted by KDC-Group to sign the offering letter. The offering letter contain detail of compensation and benefit. After the candidate sign the offering letter, candidate will receive accomodation to the jobsite.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Sixth</span>
                </div>
            </div>

            <div className="flex md:contents flex-row-reverse">
                <div
                    className="relative p-4 my-6 text-gray-800 max-w-xl bg-white border border-green-500 shadow-md rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Onboard</h3>
                    <p className="mt-2 leading-6">The candidate will sign the working agreement (PKWT). The candidate will be given an induction about company rules and policy, Environtment, Health, and Safety regulation, and company work culture.</p>
                    <span className="absolute text-sm text-gray-400 -top-5 left-2 whitespace-nowrap">Seventh</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-gradient-to-b from-sky-500 to-green-500 rounded-t-ful">
                        </div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-gray-200 border-4 border-green-500 rounded-full top-1/2"></div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Recprocess;