import { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // Замініть URL на свій ендпоінт
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Отримані дані:</h2>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default DataFetchingComponent;