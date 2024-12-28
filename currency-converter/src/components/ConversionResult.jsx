import React from "react";

const ConversionResult = ({ convertedAmount }) => {
  return convertedAmount ? (
    <div className="mt-6 text-lg font-medium text-center md:text-right text-green-600">
      Converted Amount: {convertedAmount}
    </div>
  ) : null;
};

export default ConversionResult;
