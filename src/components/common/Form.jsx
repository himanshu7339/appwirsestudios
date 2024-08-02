"use client";
import React, { useState } from "react";

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
      className="flex flex-col border-2 p-2 lg:p-20 gap-3 rounded-md shadow-lg "
    >
      <label htmlFor="name" className="flex flex-col">
        Name
        <input
          name="name"
          type="text"
          className="border-2 p-1 rounded-md"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email" className="flex flex-col">
        Email
        <input
          name="email"
          type="email"
          className="border-2 p-1 rounded-md"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="mobileNumber" className="flex flex-col">
        Mobile No
        <input
          className="border-2 p-1 rounded-md"
          type="text"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="\d{10}"
          title="Please enter a valid 10-digit mobile number"
          required
        />
      </label>
      <button type="submit" className=" bg-black text-white p-1 m-2 rounded-md">
        Book Appointment Now
      </button>
    </form>
  );
};

export default Form;
