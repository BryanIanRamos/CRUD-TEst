import React, { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorData, setErrorData] = useState(false);

  useEffect(() => {
    fetch(api)
      .then((respond) => {
        if (!respond.ok) {
          throw Error("No data found!");
        } else {
          return respond.json();
        }
      })
      .then((data) => {
        console.log("Data: ", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error: " + error.message);
        setLoading(false);
        setErrorData(true);
      });
  }, []);

  return { data, loading, errorData };
};

export default useFetch;
