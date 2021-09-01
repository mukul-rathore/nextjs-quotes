import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/quotes.png" alt='logo' width={60} height={60} />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/quotes'><a>Quotes</a></Link>
        </nav>
     );
}
 
export default Navbar;