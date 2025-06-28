"use client";

import { FC, useEffect, useState } from "react";
import Select, { CSSObjectWithLabel, OptionProps } from "react-select";
import Creatable from "react-select/creatable";

type SelectProps = {
  multiple?: boolean;
  creatable?: boolean;
  options: { value: string; label: string }[];
  onCreateOption?: (inputValue: string) => void;
};

const selectStyles = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: "var(--primary-bg-dark)",
    borderColor: "transparent",
    height: "42px",
    "&:hover": {
      borderColor: "var(--primary-color)"
    }
  }),
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "var(--text-color)"
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: "var(--primary-dark)"
  }),
  option: (base: CSSObjectWithLabel, state: OptionProps) => ({
    ...base,
    backgroundColor: state.isFocused ? "var(--primary-color)" : "var(--primary-dark)",
    color: state.isFocused ? "var(--text-color-reverse)" : "var(--text-color)",
    "&:active": {
      backgroundColor: "var(--primary-color)"
    }
  }),
  singleValue: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "var(--text-color)"
  }),
  multiValue: (base: CSSObjectWithLabel) => ({
    ...base,
    backgroundColor: "var(--primary-color)"
  }),
  multiValueLabel: (base: CSSObjectWithLabel) => ({
    ...base,
    color: "var(--text-color-reverse)"
  })
};

export const FormSelect: FC<SelectProps> = ({ multiple, creatable, options, onCreateOption }) => {
  // Generate a unique ID for the select element to avoid hydration error
  const [selectId, setSelectId] = useState<string>();
  useEffect(() => {
    setSelectId(crypto.randomUUID());
  }, []);

  if (!selectId) return null;

  const Component = creatable ? Creatable : Select;
  return (
    <Component
      instanceId={(creatable ? 'create' : 'select') + selectId}
      options={options}
      isMulti={multiple}
      styles={selectStyles}
      onCreateOption={onCreateOption}
    />
  )
};
