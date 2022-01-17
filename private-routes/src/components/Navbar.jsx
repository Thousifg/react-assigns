import { Link } from "react-router-dom";

export const Navbar = () => {
    return <>
        <div style={{ width:"100%", height:"60px", backgroundColor:"black",display:"flex", justifyContent:"center"}}>
            <Link to="/" style={{textDecoration: "none", fontWeight:"bold", color:"white", margin:"20px" }}>Home</Link>
            <Link to="/dashboard" style={{ textDecoration: "none" ,fontWeight:"bold", color:"white", margin:"20px" }}>
                Dashboard
            </Link>
            <Link to="/settings" style={{ textDecoration: "none" , fontWeight:"bold", color:"white", margin:"20px"}}>Settings</Link>
            <Link to="/login" style={{ textDecoration: "none", fontWeight:"bold", color:"white", margin:"20px"}}>
                Login
            </Link>
        </div>
    </>
}