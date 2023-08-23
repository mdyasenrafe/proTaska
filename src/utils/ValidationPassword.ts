import React from "react";

export const ValidationPassword = (
  e: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  setPassword(e);
  if (e.length == 0) {
    setError("Password Field is required");
    return false;
  } else if (e.length < 6) {
    setError("Password must be at least 6 characters");
    return false;
  } else {
    setError(undefined);
    return true;
  }
};
