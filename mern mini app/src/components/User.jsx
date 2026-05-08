function User(props){
    let {user}=props;
    return (
        <div className="m-auto  shadow-2xl bg-white rounded-xl p-4  border border-blue-300  w-60 h-72 flex flex-col justify-around ">
            <h2 className="text-lg font-bold text-center"> {user.name}</h2>
            <h2 className="text-center">{user.email}</h2>
            <img className="m-auto" src={user.image} alt="Profile photo" />
        </div>
    )
} 
export default User;