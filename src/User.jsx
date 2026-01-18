const User = ({ name, age, email }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Name is {name}
        </button>
        <p className="text-white bg-slate-600 hover:bg-slate-800">
          Age is {age}
        </p>
        <p>Email is {email}</p>
      </div>
    </div>
  );
};
export default User;
