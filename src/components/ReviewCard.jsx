function ReviewCard({ reviews }) {
  return (
    <>
      <div className="reviewCard mt-5">
        {reviews.map((review, index) => (
          <div className="oneCard" key={index}>
            <div className="img">
              <img src={review.productImage} alt={review.productTitle} />
            </div>
            <h5>{review.reviewerName}</h5>
            <p className="rate">
              <i className="fa-solid fa-star"></i> {review.rating}
            </p>
            <p className="comment">{review.comment}</p>
            <p className="date">
              {new Date(review.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReviewCard;
