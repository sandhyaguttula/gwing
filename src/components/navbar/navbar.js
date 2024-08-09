import './navbar.css';

const Navbar=()=>{
    return(
        <div className="nav">
            <div className="nav-logo">
                Evolution
            </div>
            <ul className="list-item">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className="nav-contact">Contact</li>
            </ul>
        </div>

    )
}

export default Navbar