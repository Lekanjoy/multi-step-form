import React, { FC, useState } from "react";


const step1:FC = () => {
    
  return (
    <div className="bg-Alabaster h-[400px] px-8 py-12 rounded-lg lg:bg-transparent">
      <h1 className="text-Marineblue font-bold text-2xl mb-2">Personal info</h1>
      <p className="text-Coolgray mb-3">
        Please provide your name, email address, and phone number.
      </p>
      <div className="mb-1 flex flex-col gap-y-1">
        <label className="text-Marineblue  text-sm" htmlFor="name">
          Name
        </label>
        <input
          className="text-Marineblue border border-Lightgray p-2 rounded-sm outline-none"
          type="text"
          placeholder="e.g. Stephen King"
        />
      </div>{" "}
      <div className="mb-1 flex flex-col gap-y-1">
        <label className="text-Marineblue text-sm" htmlFor="name">
          Email Address
        </label>
        <input
          className="text-Marineblue border border-Lightgray p-2 rounded-sm outline-none"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>{" "}
      <div className=" flex flex-col gap-y-1">
        <label className="text-Marineblue text-sm" htmlFor="name">
          Phone Number
        </label>
        <input
          className="text-Marineblue  border border-Lightgray p-2 rounded-sm outline-none"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
  );
}

export default step1