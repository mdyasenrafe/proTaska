import React from "react";

export const ValidationName = (
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>
) => {
  setName(name);
  if (name.length == 0) {
    return {
      error: true,
      message: "Name Field is required",
    };
  } else {
    return {
      error: false,
      message: "",
    };
  }
};
