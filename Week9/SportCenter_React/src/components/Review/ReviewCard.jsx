import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={review.image} alt={review.name} />
        <div className="client-info">
          <h4>{review.name}</h4>
          <p>{review.position}</p>
        </div>
      </div>
      <p>{review.review}</p>
    </div>
  );
};

export default ReviewCard;
