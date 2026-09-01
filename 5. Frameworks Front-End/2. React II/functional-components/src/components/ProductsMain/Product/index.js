const Product = ({ name, description, image }) =>{
    return(
        <article>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </article>
    );
}

export default Product; 