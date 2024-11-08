import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      }
      catch (err){
        console.log('Error while fethcing', err)
      }
    };

    fetchData();
  }, [url]);

  return { data };
};

export default useFetch;
