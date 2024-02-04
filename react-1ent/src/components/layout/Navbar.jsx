import CartWidget from "../common/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbar = () => {
    return <div className="navbar navbar-expand-lg navbar-light bg-light">
        <h3 className="navbar-brand">logo</h3>
        <ul className="navbar-nav">
        <li className="nav-item">< button className="btn btn-light" >Rojas</button></li>
            <li className="nav-item"><button  className="btn btn-light">Azules</button></li>
            <li className="nav-item"><button  className="btn btn-light">Amarillas</button></li>
            <li className="nav-item"><button  className="btn btn-light">Verdes</button></li>
            <li className="nav-item"><button  className="btn btn-light">Blancas</button></li>
        </ul>
        <CartWidget/>
        </div>
}

