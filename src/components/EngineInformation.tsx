import React from "react";

const EngineInformation = () => {
  return (
    <>
      <div>Engine Information</div>
      <div className="grid grid-cols-2 gap-5 text-sm">
        <div className="my-3" >
          <div className="flex flex-col">
            <span className="my-1">
              Eng. serial number: <em>066296F</em>{" "}
            </span>
            <span className="my-1">Machine rating: <em>15kVA</em> </span>
            <span className="my-1">
              Model: <em>MPLS156S-1-SR</em>{" "}
            </span>
          </div>
          
        </div>

        <div className="my-3">
          <div className="flex flex-col" >
            <span className="my-1">Last hour reading: <em>121Hrs</em></span>
            <span className="my-1">Current Hour reading: <em>121Hrs</em></span>
            <span className="my-1">Location: <em>Nairobi</em></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngineInformation;
