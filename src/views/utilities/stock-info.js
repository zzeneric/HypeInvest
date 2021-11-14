import { useState, useEffect } from 'react';
const useFetch = (url = 'http://www.abc.cd/test', options = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}
export default useFetch;