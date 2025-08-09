import { Link } from "react-router-dom";

function CardsComponents({ products }) {
  return (
    <>
      <div className="allCards">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            data-precentage={`${product.discountPercentage.toFixed(1)}%`}>
            <div className="image_com">
              <img src={product.images[0]} alt={product.title} loading="lazy" />
            </div>
            <h4>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}`
                : product.title}
            </h4>
            <p>
              category: <b>{product.category}</b>
            </p>
            <h4>${product.price}</h4>
            <p className="rate">
              {product.rating <= 3 ? (
                <>
                  <i className="me-1 fa-solid fa-star-half-stroke"></i>
                  <b>{product.rating}</b>
                </>
              ) : (
                <>
                  <i className="me-1 fa-solid fa-star"></i>
                  <b>{product.rating}</b>
                </>
              )}
            </p>
            <div className="read_more mt-2">
              <button>
                <Link to={`/product/${product.id}`}>read more</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsComponents;
