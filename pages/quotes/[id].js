export const getStaticPath = async() => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();

    const paths = data.map((quote, idx) => {
        return {
            params: {id: idx.toString()}
        }
    })

    return {
        paths, 
        fallback : false
    }
}

const Details = () => {
    return ( 
        <div>Details Page</div>
     );
}
 
export default Details;