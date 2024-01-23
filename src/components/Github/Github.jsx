import React from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetch("https://api.github.com/users/hanif9050");
  const data = await res.json();
  console.log(data);
  return data;
};
const Github = () => {
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1>Github {data.name}</h1>
      <img src={data.avatar_url} alt="" width="300px" />
    </div>
  );
};

export default Github;
