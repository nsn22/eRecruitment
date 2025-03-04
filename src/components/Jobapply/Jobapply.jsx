// App.js
import React, { useState } from 'react';

function Jobapply() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        role: '',
        name: '',
        phone: '',
        file: null,
    });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
        ...formData,
        file: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessAlert(true); // Tampilkan success alert
    };

    const closeSuccessAlert = () => {
        setShowSuccessAlert(false); // Sembunyikan success alert
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-6">Job Application</h1>

                {/* Step Indicator */}
                <div className="flex justify-betwen mb-6">
                    <div className='w-1/3 text-center'>
                        <h5 className={`mb-4 w-fit px-2 ${step >= 1 ? 'bg-green-200 text-green-700' : 'bg-green-200 bg-opacity-45 text-green-700 text-opacity-45'} rounded-full`}>Personal Info</h5>
                        <div className={`w-full h-2 ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-center'>
                        <h5 className={`mb-4 w-fit px-2 ${step >= 2 ? 'bg-green-200 text-green-700' : 'bg-green-200 bg-opacity-45 text-green-700 text-opacity-45'} rounded-full`}>Job Position</h5>
                        <div className={`w-full h-2 ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className='w-1/3 flex flex-col items-end text-center'>
                        <h5 className={`mb-4 w-fit px-2 ${step >= 3 ? 'bg-green-200 text-green-700' : 'bg-green-200 bg-opacity-45 text-green-700 text-opacity-45'} rounded-full`}>Documents</h5>
                        <div className={`w-full h-2 ${step >= 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>                 
                </div>

                {/* Step 1: Job Location and Position */}
                {step === 1 && (
                <div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email }
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Your Email"
                            
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Job Position</label>
                        <input
                            required
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter job title, position..."
                        />
                    </div>

                    <button
                    onClick={handleNext}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                    Next
                    </button>
                </div>
                )}

                {/* Step 2: Personal Details */}
                {step === 2 && (
                <div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Next
                        </button>
                    </div>
                </div>
                )}

                {/* Step 3: Certification and Submit */}
                {step === 3 && (
                <div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Certification (optional)</label>
                        <div className="flex items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-md">
                            <input
                            type="file"
                            onChange={handleFileChange}
                            className=""
                            id="file-upload"
                            />
                            <label htmlFor="file-upload" className="text-sm text-gray-500 cursor-pointer">
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={handlePrev}
                            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                )}

                {/* Success Alert */}
                {showSuccessAlert && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm">
                        <h2 className="text-xl font-semibold mb-4">We've received your application!</h2>
                        <p className="text-gray-600 mb-4">We will process it and reach out to you in a few days.</p>
                        <button
                            onClick={closeSuccessAlert}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
    }

export default Jobapply;