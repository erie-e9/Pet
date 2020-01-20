import { FieldProps } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <div>
      <input
        style={{
          display: "inline-block",
          borderRadius: 7,
          boxSizing: "content-box",
          padding: 7,
          borderStyle: "solid",
          borderColor: "#e2e2e2",
          borderWidth: 1,
          outline: "none",
          backgroundColor: "#ffffff",
          fontFamily: "Arial",
          fontSize: 14
        }}
        {...field}
        {...props}
      />
      {errorMessage && (
        <div
          style={{
            color: "#989898",
            fontSize: 11,
            fontFamily: "sans-serif",
            display: "-webkit-inline-box",
            margin: "0.5em"
          }}
        >
          <p>{errorMessage ? errorMessage : ""}</p>
        </div>
      )}
    </div>
  );
};
