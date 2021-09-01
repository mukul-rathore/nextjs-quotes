import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

const NotFound = () => {
    const router  = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])


    return ( 
        <div className={styles.notfound}>
            <h1>Oooops...</h1>
            <h2>Thet page cannot be found.</h2>
            <p>Go back to <Link href='/'><a className={styles.btn}>Homepage</a></Link></p>
        </div>
     );
}
 
export default NotFound;