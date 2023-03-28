import { useState, FC, ChangeEvent } from "react";
import { ADD_ONS_DATA as data } from "../addOnsData";

const Step3: FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [addOnsData] = useState(data);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedIds([...selectedIds, Number(value)]);
        // console.log(selectedIds);
 
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== Number(value)));
      console.log(selectedIds);
    }
  };

  const style =
    "addsOnOption flex items-center justify-between p-4 border rounded-lg gap-x-4";

  return (
    <div className="bg-Alabaster px-8 py-12 rounded-lg lg:bg-transparent">
      <h1 className="text-Marineblue font-bold text-2xl mb-2">Pick add-ons</h1>
      <p className="text-Coolgray mb-3">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col cursor-pointer gap-y-3 mt-2">
        {addOnsData.map((data) => {
          return (
            <label
              key={data.id}
              htmlFor={`checkbox-${data.id}`}
              id="addsOnOption"
              className={
                selectedIds.includes(data.id)
                  ? `${style} bg-Magnolia border-Purplishblue`
                  : style
              }
            >
              <div className="flex gap-x-3 items-center">
                <input
                  type="checkbox"
                  id={`checkbox-${data.id}`}
                  value={data.id}
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <div className="flex flex-col">
                  <h3 className="text-Marineblue font-semibold text-lg">
                    {data.title}
                  </h3>
                  <p className="text-Coolgray">{data.subTitle}</p>
                </div>
              </div>
              <p className="items-end text-Pastelblue font-medium">
                +${data.price}/mo
              </p>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Step3;
