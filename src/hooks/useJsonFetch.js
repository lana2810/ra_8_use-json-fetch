import { useEffect, useState } from "react";
const URL_SERVER = "http://localhost:7070";

function useJsonFetch(url, opts) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(URL_SERVER + url)
      .then((response) => {
        if (response.status === 500) throw new Error("Internal Error");
        return response.json();
      })
      .then((json) => {
        if (!json) throw new Error("Error data");
        setData(json);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return [data, loading, error];
}

export default useJsonFetch;
