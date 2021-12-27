import { useEffect, useState } from "react";

// useData custom hooks get a prop value input, fetches the data file and sets the state to the object matching the prop value and returns the relevant data.
// For general use, a second prop for the fetch destinations can be added.

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
