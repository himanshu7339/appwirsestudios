"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const FormEbook = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    "https://script.google.com/macros/s/AKfycbxMybOO4bO7hByzXNYHd2QDi020z4vaa_hAgUQHVmkXAOa7iIYB4M_qCViQwdLu8NOp/exec";
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
        router.push(
          "https://drive.usercontent.google.com/download?id=1KT1yRMOKTvIQLQFz9dZnIi56KHAp06s4&export=download&authuser=0&confirm=t&uuid=08572948-722b-4c0f-b7f2-5fdc7b95d5c0&at=APZUnTUT85UJmSi7nm2utaiAx3pq:1723256892845"
        );
      } else {
        setLoading(false);
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
      className="flex flex-col bg-blue  p-2 lg:p-20 gap-3 rounded-md  "
    >
      <h1 className="lg:ext-2xl text-xl font-bold text-white">
        GET A FREE COPY OF OUR EBOOK
      </h1>
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
      <label htmlFor="email" className="flex flex-col text-white">
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

      <button
        type="submit"
        className={`bg-blue hover:bg-black duration-300 transition text-white border p-1 m-2 rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Processing..." : "Claim your FREE Copy Now"}
      </button>
    </form>
  );
};

export default FormEbook;
