import {Link} from 'react-router-dom'
export default function NavComp(){
    return(
        <div className='nav'>
        <nav>
        <Link to='..'><img src='/public/finalogo.png'></img></Link>
        </nav>
        </div>
    )
}