import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div class="logo">
                <h1>Quotes</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/quotes'><a>Quotes</a></Link>
        </nav>
     );
}
 
export default Navbar;