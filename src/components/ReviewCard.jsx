function ReviewCard({ reviews, showImage , showEmail}) {
  return (
    <>
      <div className="reviewCard mt-5">
        {reviews.map((review, index) => (
          <div className="oneCard" key={index}>
            <div className="img">
              {showImage && (
                <img src={review.productImage} alt={review.productTitle} />
              )}
            </div>
            <h5 className="mt-5">{review.reviewerName}</h5>
            <div className="email">
              {
                showEmail && (
                  <p>{review.reviewerEmail}</p>
                )
              }
            </div>
            <p className="rate">
              {review.rating <= 3 ? (
                <>
                  <i className="me-1 fa-solid fa-star-half-stroke"></i>
                  <b>{review.rating}</b>
                </>
              ) : (
                <>
                  <i className="me-1 fa-solid fa-star"></i>
                  <b>{review.rating}</b>
                </>
              )}
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
