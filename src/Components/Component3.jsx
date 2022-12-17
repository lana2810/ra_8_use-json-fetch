import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function Component3() {
  const url = "/loading";
  const [, loading] = useJsonFetch(url, []);
  return (
    <div>
      <span>Компонент 3</span>
      <div>{!loading && <span>Загружено!</span>}</div>
    </div>
  );
}

export default Component3;
