const User = ({name, age, email}) => {
  return (
    <div>
      <p className="text-red">Name is {name}</p>
      <p>Age is {age}</p>
      <p>Email is {email}</p>
    </div>
  );
};
export default User;
