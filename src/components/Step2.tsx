import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from "../assets/images/icon-pro.svg";

const Step2 = () => {
  return (
    <div className="bg-Alabaster px-8 py-12 rounded-lg lg:bg-transparent">
      <h1 className="text-Marineblue font-bold text-2xl mb-2">
        Select your Plan
      </h1>
      <p className="text-Coolgray mb-3">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col gap-y-3 mt-2 ">
        <div className="flex gap-x-5 border px-3 py-3 rounded-lg">
          <img src={arcade} alt="Arcade icon" />
          <div className="flex flex-col">
            <h2 className="text-Marineblue font-semibold text-lg">Arcade</h2>
            <p className="text-Coolgray">$9/mo</p>
          </div>
        </div>
        <div className="flex gap-x-5 border px-3 py-3 rounded-lg">
          <img src={advanced} alt="Advanced icon" />
          <div className="flex flex-col">
            <h2 className="text-Marineblue font-semibold text-lg">Advanced</h2>
            <p className="text-Coolgray"> $12/mo</p>
          </div>
        </div>
        <div className="flex gap-x-5 border px-3 py-3 rounded-lg">
          <img src={pro} alt="Pro icon" />
          <div className="flex flex-col">
            <h2 className="text-Marineblue font-semibold text-lg">Pro</h2>
            <p className="text-Coolgray">$15/mo</p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 items-center justify-center w-full h-12 mt-5 bg-Magnoli">
        <h3 className="text-Marineblue font-semibold"> Monthly</h3>
        <>
          <input type="checkbox" id="checkbox" className="checkbox hidden" />
          <label className="label w-[50px] h-[25px] rounded-[50px] p-[5px] cursor-pointer flex justify-between relative bg-Marineblue ease-in-out" htmlFor="checkbox">
            <div className="ball absolute w-5 h-5 rounded-[50%] bg-white left-[2px] top-[2.15px] ease-linear duration-500"></div>
          </label>
        </>
        <h3 className="text-Marineblue font-semibold">Yearly</h3>
      </div>
    </div>
  );
}

export default Step2