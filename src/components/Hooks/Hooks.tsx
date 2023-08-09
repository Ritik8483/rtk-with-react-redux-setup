import React, { useEffect, useState } from "react";
import useDebounce from "../reuseables/useDebounce";

const Hooks = () => {
  const [value, setValue] = useState<string>("");
  console.log("value", value);
  const debouncedValue: string = useDebounce(value, 3000);
  console.log("debouncedValue", debouncedValue);

  useEffect(() => {
    function add(a:any, b:any) {
      return a + b;
    }

    console.log(add(2, 3));
  }, []);

  return (
    <div>
      <input
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        placeholder="write here..."
      />
    </div>
  );
};

export default Hooks;
