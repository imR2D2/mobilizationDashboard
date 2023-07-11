import React from 'react';
import StructureInputs from "./StructureInputs";

const FormComponent = () => {
  const formInputs = [
    //FILA 1----------------------------------
    {
      label: "Clave elector",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Nombre(s)",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Apellido paterno",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Apellido materno",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },

    //FILA 2----------------------------------
    {
      label: "Fecha de nacimiento",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-4",
    },
    {
      label: "Sexo",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-4",
    },
    {
      label: "Estado de Nacimiento",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-4",
    },

    //FILA 3----------------------------------
    {
      title: '.',
      titleColor: 'white',
      label: "Clave elector",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      title: '.',
      titleColor: 'white',
      label: "Número Int.",
      type: "text",
      value: "",
      col: "",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      title: 'Domicilio donde vive',
      titleColor: 'blue-950',
      label: "Número Ext.",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      title: '.',
      titleColor: 'white',
      label: "Municipio vive",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    //FILA 4----------------------------------
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
    {
      label: "Sección vota",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },

    //FILA 5----------------------------------
    {
      label: "Teléfono celular",
      type: "text",
      value: "",
      col: "*",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Teléfono fijo",
      type: "text",
      value: "",
      col: "",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Teléfono mensajes",
      type: "text",
      value: "",
      col: "",
      width: "full",
      gridPosition: "col-span-3",
    },
    {
      label: "Desea ser voluntatio",
      type: "checkbox",
      value: "",
      col: "",
      width: "full",
      gridPosition: "col-span-3",
    },
  ];

  return <StructureInputs inputs={formInputs} />;
  
};

export default FormComponent;
