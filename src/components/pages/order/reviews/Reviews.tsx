"use client";

import { useCallback, useState } from "react";
import ReviewItem from "./reviewItem/Review";
import SelectedReview from "./selectedReview/SelectedReview";

export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  reviewHeader: string;
  reviewText: JSX.Element;
}

const reviews: Array<Review> = [
  {
    id: 0,
    author: "Laura",
    date: "03/2024",
    rating: 5,
    reviewHeader: "Sehr sicher und wirklich gute Qualität",
    reviewText: (
      <>
        Es ist leicht genug für mein Kleinkind, um es selbst zu bedienen, und
        die Größe und Form hat keine scharfen Kanten, um die man sich sorgen
        muss. Sie genießen es, meine Hand zu halten, während sie die gesamte
        Länge durchqueren, und es manchmal als eine Bank zu verwenden.
      </>
    ),
  },
  {
    id: 1,
    author: "Lena",
    date: "05/2024",
    rating: 4,
    reviewHeader: "Freue mich über die grüne Wahl!",
    reviewText: (
      <>
        Die Qualität ist großartig, die Anweisungen sind einfach zu befolgen und
        alle benötigten Teile waren enthalten. Außerdem ist es komplett aus
        Holz, also 100% umweltfreundlich.
      </>
    ),
  },
  {
    id: 2,
    author: "Maximilian",
    date: "06/2024",
    rating: 5,
    reviewHeader: "Großartig für Kinder jeden Alters",
    reviewText: (
      <>
        Ich habe es gekauft, damit die Kinder etwas zu tun haben, wenn die
        Winter in den Minusbereich kommen und wir nicht mehr so oft nach draußen
        gehen können, und die Kinder lieben es jetzt schon! Die Qualität ist
        erstaunlich und sie blieben mit mir in Kontakt, um sicherzustellen, dass
        alles angekommen ist und ob ich irgendwelche Fragen hatte! Vielen Dank
        dafür! Sehr zu empfehlen für Ihre Kinder!
      </>
    ),
  },
  {
    id: 3,
    author: "Emma",
    date: "09/2024",
    rating: 5,
    reviewHeader: "Hilft viel Energie zu verbrennen",
    reviewText: (
      <>
        Ich habe es vor 3 Jahren für meinen Enkel gekauft und er liebte es so
        sehr, dass ich es für meine Enkelin wieder gekauft habe. Solche große
        Qualität und einfache Montage
      </>
    ),
  },
];

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  const handleSelectReview = useCallback(
    (review: Review) => setSelectedReview(review),
    []
  );

  return (
    <section className="relative mt-16 xl:mt-20 2xl:mt-24fullHD:mt-30 mb-10 flex flex-row max-md:flex-col items-start gap-6 xl:gap-10 fullHD:gap-14 flex-nowrap">
      <ul className="flex flex-col max-md:flex-row flex-nowrap max-md:overflow-x-auto max-md:max-w-full gap-4 md:w-[21%] md:min-w-[300px] max-md:-mr-8">
        {reviews.map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
            selectedReviewId={selectedReview.id}
            selectReview={handleSelectReview}
          />
        ))}
      </ul>
      <SelectedReview reviews={reviews} selectedReview={selectedReview} />
    </section>
  );
};

export default Reviews;
