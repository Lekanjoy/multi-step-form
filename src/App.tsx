import { FC, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";

const App: FC = () => {
  const [steps] = useState([<Step1 />, <Step2 />, <Step3 />, <Step4 />]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepTitle] = useState<string[]>([
    "Your info",
    "Select plan",
    "Add-ons",
    "Summary",
  ]);

  function nextStep() {
    setCurrentStep((prevStep) =>
      prevStep < steps.length - 1 ? prevStep + 1 : steps.length - 1
    );
  }

  // Next Step
  function prevStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }

  const styles =
    "flex justify-center items-center w-10 h-10 rounded-full  border border-white w-8 h-8 rounded-full";

  return (
    <div className="relative bg-Lightblue w-full min-h-screen flex justify-center items-center ">
      <main className="w-fit flex flex-col items-center rounded-lg lg:flex-row lg:bg-white  lg:p-3 lg:h-[600px] lg:min-w-[700px]">
        <section className="absolute -z-1 top-0 left-0 bg-sidebar-mobile bg-no-repeat bg-cover w-full h-[200px] flex justify-center items-center lg:items-start lg:p-4 lg:relative lg:z-0 lg:rounded-lg lg:bg-sidebar-desk lg:w-[200px] lg:h-full">
          <div className="flex items-center gap-x-6 mb-12 lg:flex-col lg:gap-y-6 lg:items-start">
            {steps.map((step, index) => {
              return (
                <div className="flex items-center gap-x-3">
                  <p
                    key={index}
                    className={
                      index === currentStep
                        ? `${styles} bg-Lightblue text-Marineblue`
                        : `${styles}  text-white`
                    }
                  >
                    {index + 1}
                  </p>
                  <div className="flex uppercase text-sm flex-col lg:w-28">
                    <p className="hidden text-Pastelblue lg:flex">
                      Step {index + 1}
                    </p>
                    <p className="hidden text-white  lg:flex">
                      {stepTitle[index]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <form
          className="px-5 w-full z-10 mt-8  lg:mt-0"
          autoComplete="on"
          onSubmit={(e) => e.preventDefault()}
        >
          {steps[currentStep]}
          <div className="w-full flex justify-between items-center mt-8 ">
            {currentStep > 0 ? (
              <button onClick={prevStep} className="text-Coolgray">
                Go Back
              </button>
            ) : (
              <p></p>
            )}
            <button
              onClick={nextStep}
              className="bg-Marineblue text-white px-4 py-2  rounded-md"
            >
              Next Step
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
