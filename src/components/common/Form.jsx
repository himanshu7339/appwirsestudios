"use client";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNumber") {
      // Allow only digits and limit to 10 characters
      const validValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: validValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  let url =
    "https://script.google.com/macros/s/AKfycbyuGUedSFiK4dsymLAPfStUqqlnTQx--4fISybP-wSC0LGBkvh6o7MZT3zyc2U7ntqH5w/exec";
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.result === "success") {
        setLoading(false);
        alert(result.message);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      setLoading(false);
      alert("Error booking appointment: " + error.message);
    }
  };
  return (
    <form
    onSubmit={onSubmitHandler}
    className="flex flex-col border border-white bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] p-8 lg:p-10 gap-6 rounded-lg shadow-xl"
  >
    <h1 className="text-2xl lg:text-4xl font-bold text-white text-center mb-6">
      Please submit the form, and <br /> we will call soon!
    </h1>
    
    <label htmlFor="name" className="flex flex-col text-white mb-4">
      <span className="text-lg font-semibold mb-1">Name</span>
      <input
        name="name"
        type="text"
        className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </label>
    
    <label htmlFor="email" className="flex flex-col text-white mb-4">
      <span className="text-lg font-semibold mb-1">Email</span>
      <input
        name="email"
        type="email"
        className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition"
        placeholder="example@gmail.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </label>
    
    <label htmlFor="mobileNumber" className="flex flex-col text-white mb-4">
      <span className="text-lg font-semibold mb-1">Mobile No</span>
      <input
        className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition"
        type="text"
        placeholder="Mobile Number"
        name="mobileNumber"
        value={formData.mobileNumber}
        onChange={handleChange}
        pattern="\d{10}"
        title="Please enter a valid 10-digit mobile number"
        required
      />
    </label>
    
    <button
      type="submit"
      className={`bg-[#1e3a8a] hover:bg-[#1d4ed8] duration-300 transition text-white border p-3 rounded-md ${
        loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={loading}
    >
      {loading ? "Processing..." : "Schedule your free consultation"}
    </button>
  </form>
  

  
  );
};

export default Form;
