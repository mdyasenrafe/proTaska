import React from "react";

export const ValidationConfrimPassword = (
  e: string,
  passwod: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  setPassword(e);
  if (e.length == 0) setError("Confirm password is required");
  else if (e !== passwod) setError("Password does not match");
  else setError(undefined);
};
