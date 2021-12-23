import { useEffect, useState } from "react";

function useData(value) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      await fetch("./data.json")
        .then((res) => res.json())
        .then((data) => {
          setData(data[value]);
        });

    fetchData();
  }, [value]);

  return data;
}

export default useData;
