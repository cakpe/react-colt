import { useState } from "react";
export default initialVal => { //initialVal here is a parameter and not the function name. there could have been a parenthesis around it
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
