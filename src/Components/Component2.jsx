import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function Component2() {
  const url = "/error";
  const [, loading, error] = useJsonFetch(url, []);
  return (
    <div>
      <span>Компонент 2</span>
      <pre> {!loading && error}</pre>
    </div>
  );
}

export default Component2;
