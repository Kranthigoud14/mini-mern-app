function Navbar(){
    return(
        <div className=" flex justify-between  p-7 bg-gray-800" >
        
                <h2 className="font-bold text-white text-3xl">LOGO</h2>
           
                <ul className=" flex justify-around gap-3 text-white ">
                    <li className><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Logout</a></li>
                    
                </ul>
            

        </div>
    )
}
export default Navbar;