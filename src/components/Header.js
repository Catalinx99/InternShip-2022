import "./headerst.css";
import logo from "./logo192.png";
const Header = () => {

  return (
    <div>
    <div class="wrapper">
        <div class="sidebar">
        <div className="logo">
                <img src={logo} alt="profile_picture" className="logo2"/>
            </div>
            <ul>
                <li>
                    <a href="/" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item">Home</span>
                    </a>
                </li>
                <li>
                    <a href="/about-us">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item">About</span>
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        <span class="icon"><i class="fas fa-user-friends"></i></span>
                        <span class="item">Contact</span>
                    </a>
                </li>
               
                </ul>
       </div>
       </div>
       
    </div>
  )
}

export default Header
