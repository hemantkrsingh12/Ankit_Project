import React, { useEffect, useState } from 'react';

const Task10 = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between mt-16 ">
      {data.map((item) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 w-1/3" key={item.id}>
          <img className="w-full" src={item.images[0]} alt="Product" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.brand}</div>
            <p className="text-gray-700 text-base">
              {item.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.category}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Price: {item.price}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stock: {item.stock}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task10;
