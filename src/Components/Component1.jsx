import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function Component1() {
  const url = "/data";
  const [data] = useJsonFetch(url, []);
  return (
    <div>
      <span>Компонент 1</span>
      <pre> {JSON.stringify(data)}</pre>
    </div>
  );
}

export default Component1;
