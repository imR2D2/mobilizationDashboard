import React from 'react';
import SegmentNot from "./segmentNot"

const SegmentComponent = () => {
  const formInputs = [
    //FILA 1----------------------------------
    {
      label: "Calle",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Número Ext.",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Número Int.",
      type: "text",
      value: "",
      col: "",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Municipio Vota",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },

    //FILA 2----------------------------------
    {
      label: "Localidad",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Colonia",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "CP",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
  ];

  return <SegmentNot inputs={formInputs} />;
  
};

export default SegmentComponent;
