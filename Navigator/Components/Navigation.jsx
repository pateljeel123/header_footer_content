import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div style={{justifyContent:"space-between",display:"flex",textDecoration:"none"}}>
      <Link to={"/"}>home</Link>
      <Link to={"/product"}>product</Link>
      <Link to={"/addproduct"}>Addproduct</Link>
      <Link to={"/login"}>login</Link>
    </div>
  )
}

export default Navigation
