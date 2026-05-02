"use client";

import { FC, useId } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
type OptionType = { value: string; label: string };

type SelectProps = {
  name?: string;
  multiple?: boolean;
  creatable?: boolean;
  options: { value: string; label: string }[];
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  onCreateOption?: (inputValue: string) => void;
};

import type { StylesConfig } from "react-select";

const selectStyles: StylesConfig<OptionType, boolean> = {
  control: (base) => ({
    ...base,
    backgroundColor: "var(--primary-bg-dark)",
    borderColor: "transparent",
    height: "42px",
    "&:hover": {
      borderColor: "var(--primary-color)"
    }
  }),
  input: (base) => ({
    ...base,
    color: "var(--text-color)"
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "var(--primary-dark)"
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "var(--primary-color)" : "var(--primary-dark)",
    color: state.isFocused ? "var(--text-color-reverse)" : "var(--text-color)",
    "&:active": {
      backgroundColor: "var(--primary-color)"
    }
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--text-color)"
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: "var(--primary-color)"
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "var(--text-color-reverse)"
  })
};

export const FormSelect: FC<SelectProps> = ({ name, multiple, creatable, value, onChange, options, onCreateOption }) => {
  const selectId = useId();

  const getValue = () => {
    if (multiple) {
      // value might be undefined, or an array
      if (Array.isArray(value)) {
        return options.filter((o) => value.includes(o.value));
      }
      return [];
    } else {
      // value might be undefined, or a single string
      return options.find((o) => o.value === value) || null;
    }
  };


  const isCreatable = !!creatable;
  if (isCreatable) {
    return (
      <Creatable
        name={name}
        instanceId={'create' + selectId}
        options={options}
        isMulti={multiple}
        value={getValue()}
        onChange={(selected) => {
          if (!onChange) return;
          if (multiple) {
            onChange(
              Array.isArray(selected)
                ? selected.map((opt) => (opt as OptionType).value)
                : []
            );
          } else {
            onChange(
              selected
                ? (selected as OptionType).value
                : ""
            );
          }
        }}
        styles={selectStyles}
        onCreateOption={onCreateOption}
      />
    );
  }
  return (
    <Select
      name={name}
      instanceId={'select' + selectId}
      options={options}
      isMulti={multiple}
      value={getValue()}
      onChange={(selected) => {
        if (!onChange) return;
        if (multiple) {
          onChange(
            Array.isArray(selected)
              ? selected.map((opt) => (opt as OptionType).value)
              : []
          );
        } else {
          onChange(
            selected
              ? (selected as OptionType).value
              : ""
          );
        }
      }}
      styles={selectStyles}
    />
  )
};
