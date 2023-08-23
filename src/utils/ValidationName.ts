import React from "react";

export const ValidationName = (
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setNameError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  setName(name);
  if (name.length == 0) setNameError("Name field is required");
  else if (name.length < 3) setNameError("Name must be at least 3 characters");
  else setNameError(undefined);
};
