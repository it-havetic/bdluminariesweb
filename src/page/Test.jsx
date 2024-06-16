import React from 'react';

const Test = () => {
  const data = [
    {
      adjustableNeck: "Tilting",
      opticalMaterial: "Reflective Cup+Lens",
      productDimension: "70X45X50MM",
      productDimensionCutOff: "60X35MM",
    },
    {
      adjustableNeck: "",
      opticalMaterial: "",
      productDimension: "280X45X50MM",
      productDimensionCutOff: "270X35MM",
    },
    {
      adjustableNeck: "",
      opticalMaterial: "",
      productDimension: "280X45X50MM",
      productDimensionCutOff: "270X35MM",
    },
    {
      adjustableNeck: "",
      opticalMaterial: "",
      productDimension: "280X45X50MM",
      productDimensionCutOff: "270X35MM",
    },
    {
      adjustableNeck: "",
      opticalMaterial: "",
      productDimension: "415X45X50MM",
      productDimensionCutOff: "405X35MM",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl overflow-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Adjustable Neck</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Optical Material</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Product Dimension (L/W/H)</th>
              <th className="py-2 px-4 border-b border-gray-200 text-left">Product Dimension (Cut Off)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-200">{row.adjustableNeck}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.opticalMaterial}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.productDimension}</td>
                <td className="py-2 px-4 border-b border-gray-200">{row.productDimensionCutOff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
