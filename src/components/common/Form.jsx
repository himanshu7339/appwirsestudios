"use client";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Form = () => {
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
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.result === "success") {
        alert(result.message);
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      alert("Error booking appointment: " + error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col bg-blue  p-2 lg:p-20 gap-3 rounded-md shadow-lg "
    >

      <h1 className="lg:ext-2xl text-xl font-bold text-white">Please submit the form, and <br/> we will call soon!</h1>
      <label htmlFor="name" className="flex flex-col text-white">
        Name
        <input
          name="name"
          type="text"
          className=" p-2 rounded-md text-black focus:outline-none"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email" className="flex flex-col text-black">
        Email
        <input
          name="email"
          type="email"
          className=" p-2 rounded-md text-black focus:outline-none"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="mobileNumber" className="flex flex-col text-white">
        Mobile No
        <input
          className=" p-2 rounded-md text-black focus:outline-none"
          type="text"
          placeholder="Mobile"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="\d{10}"
          title="Please enter a valid 10-digit mobile number"
          required
        />
      </label>
      <button type="submit" className=" bg-blue hover:bg-black duration-300 transition flex items-center justify-between text-white border p-1 m-2 rounded-md">
        Book Appointment Now <FaLongArrowAltRight/>
      </button>
    </form>
  );
};

export default Form;
