import validator from "validator";
import React from "react";

export const ValidationEmail = (email: string) => {
  if (email.length == 0) {
    return {
      error: true,
      message: "Email Field is required",
    };
  } else {
    const emailValidation = validator.isEmail(email);
    if (emailValidation) {
      return {
        error: false,
        message: "",
      };
    } else {
      return {
        error: true,
        message: "Email Field is not valid",
      };
    }
  }
};
