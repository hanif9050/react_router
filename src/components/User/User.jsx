import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1 className="bg-green-700 text-white text-3xl p-4 text-center">
        User: {userId}
      </h1>
    </div>
  );
};

export default User;
