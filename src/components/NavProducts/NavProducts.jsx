import {Link } from 'react-router-dom';

export const NavProducts = () => {
    return (
        <nav style={{width:"fit-content", backgroundColor:"white"}} className='d-flex flex-wrap m-5 gap-5'>
                    <Link to="/productos"><span>[</span>Todos<span>]</span></Link>
                    <Link to="category/2x2"><span>[</span>2x2<span>]</span></Link>
                    <Link to="category/3x3"><span>[</span>3x3<span>]</span></Link>
                    <Link to="category/minx"><span>[</span>Minx<span>]</span></Link>
                    <Link to="category/otros"><span>[</span>Otros<span>]</span></Link>
        </nav>
    )
}

/* export default NavProducts */