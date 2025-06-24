import React from "react";
import SectionHeader from "./SectionHeader";
import ReviewsGrid from "./ReviewsGrid";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Diet Expert",
      position: "CFO",
      image: "/images/client1.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam ouod incidunt beatae reprehensio deleniti quis, sint dolorem voluptatem repudiandae deserunt esse, neque error voluptate. Qui animi eius quod omnis.",
    },
    {
      id: 2,
      name: "Cardio Trainer",
      position: "CEO",
      image: "/images/client2.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quisquam ouod incidunt beatae reprehensio deleniti quis, sint dolorem voluptatem repudiandae deserunt esse, neque error voluptate. Qui animi eius quod omnis.",
    },
  ];

  return (
    <section id="review" className="review-section">
      <div className="container">
        <SectionHeader
          title="REVIEW CLIENT"
          description="Lorem ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <ReviewsGrid>
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </ReviewsGrid>
      </div>
    </section>
  );
};

export default Review;
