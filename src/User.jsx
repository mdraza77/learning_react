const User = ({ user }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Name is {user.name}
        </button>
        <p className="text-white bg-slate-600 hover:bg-slate-800">
          Age is {user.age}
        </p>
        <p>Email is {user.email}</p>
      </div>
    </div>
  );
};
export default User;
