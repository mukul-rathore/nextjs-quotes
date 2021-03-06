import Head from 'next/head'
import Link from 'next/link'
import ScrollButton from '../../components/ScrollButton'
import styles from '../../styles/Quotes.module.css'

export const getStaticProps = async() => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();

    // console.log(data);

    if (!data) {
        return {
        notFound: true,
        }
    }

    return {
        props: { quotes : data }, // will be passed to the page component as props
    }
}

const Quotes = ({quotes}) => {
    return ( 
        <> 
            <Head>
                <title>All Ouotes</title>
            </Head>
            <div>
                <h1>All Quotes</h1> 
                {
                    quotes.map((quote, idx) => (
                        <Link key={idx} href={`/quotes/${idx}`} >
                            <a  className={styles.single}>{quote.text}</a>
                        </Link>
                    ))
                }
            </div>
            <ScrollButton />
        </>
    );
}
 
export default Quotes;