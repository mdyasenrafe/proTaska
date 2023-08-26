import React from "react";

export const ValidationConfrimPassword = (
  passwod: string,
  confirmPassword: string
) => {
  if (confirmPassword.length === 0)
    return {
      error: true,
      message: "Confirm Password Field is required",
    };
  else if (passwod !== confirmPassword)
    return {
      error: true,
      message: "Password and Confirm Password must be the same",
    };
  else
    return {
      error: false,
      message: "",
    };
};
