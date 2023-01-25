import React from "react";

const Home = () => {
  const userData = [
    {
      username: "user1",
    },
    {
      username: "user2",
    },
    {
      username: "user3",
    },
    {
      username: "user4",
    },
    {
      username: "user5",
    },
    {
      username: "user6",
    },
  ];
  return (
    <div className="flex flex-col h-[700px] w-[60%] bg-slate-500 text-center items-center">
      <div className="text-2xl text-white my-5">User list</div>
      <div className="flex items-center flex-wrap justify-center gap-5">
        {userData?.map((user) => {
          return (
            <div className="flex flex-col items-center text-center w-[200px] bg-red-300 justify-center p-5 gap-5">
              <div>{user.username}</div>
              <button className="hover:text-red-500">Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
