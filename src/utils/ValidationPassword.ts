import React from "react";

export const ValidationPassword = (password: string) => {
  if (password.length == 0)
    return {
      error: true,
      message: "Password Field is required",
    };
  else if (password.length < 6)
    return {
      error: true,
      message: "Password must be at least 6 characters",
    };
  else
    return {
      error: false,
      message: "",
    };
};
