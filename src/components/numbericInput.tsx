import React, { useState } from "react";

const NumericInputComponent = ({ onChange }: any) => {
  const [numericValue, setNumericValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    const numericOnly = inputValue.replace(/[^0-9]/g, "");
    setNumericValue(numericOnly);
    onChange(numericOnly);
  };

  return (
    <div>
      <input
        type="number"
        value={numericValue}
        onChange={handleInputChange}
        placeholder="รหัสนิสิต*"
        className="input w-full"
      />
    </div>
  );
};

export default NumericInputComponent;
