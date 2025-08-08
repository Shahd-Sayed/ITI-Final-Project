function StarRating({ rate }) {
  const totalStars = 5;
  const filledStars = Math.round(rate); 

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, i) => (
        <span key={i} className={i < filledStars ? "star filled" : "star"}>
          &#9733;
        </span>
      ))}
    </div>
  );
}
export default StarRating;
