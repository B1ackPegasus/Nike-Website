import React from 'react';
import {reviews} from "../assets/constans/index.js";
import ReviewCard from "../components/ReviewCard.jsx";

const CostumerReviews = () => {
    return (
        <section className="">
            <div  className="max-container">
                <h3 className="font-palanquin font-bold text-center text-4xl ">What Our
                    <span className="text-coral-red"> Customers </span>
                    Say?
                </h3>
                <p className= " info-text max-w-lg m-auto text-center"> Hear genuine stories from our
                satisfied customers...</p>
                <div className="mt-24 flex flex-1 justify-evenly
                items-center max-lg:flex-col gap-14 ">
                    {reviews.map((review)=>(
                        <ReviewCard
                        key={review.customerName}
                        img={review.imgURL}
                        costumerName={review.customerName}
                        feedback = {review.feedback}
                        rating={review.rating}/>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CostumerReviews;