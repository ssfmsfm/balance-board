import Image from "next/image";
import { Review } from "../Reviews";

const ReviewItem = ({
  review,
  selectedReviewId,
  selectReview,
}: {
  review: Review;
  selectedReviewId: number;
  selectReview: (review: Review) => void;
}) => (
  <li
    className={`relative flex flex-row flex-nowrap items-center py-3 px-5 rounded-2xl xl:rounded-3xl fullHD:rounded-10 gap-4 ease-in-out duration-300 transition-background cursor-pointer ${selectedReviewId === review.id ? "bg-orange-50" : "bg-white"}`}
    onClick={() => selectReview(review)}
  >
    <div className="w-20 fullHD:w-24 aspect-square flex items-center justify-center font-extrabold text-xl xl:text-2xl fullHD:text-3xl bg-amber-400 max-md:bg-orange-50 rounded-full">
      <span>{review.author.slice(0, 1).toUpperCase()}</span>
    </div>
    <div className="relative flex flex-col gap-2 grow">
      <div className="flex items-center flex-nowrap justify-between">
        <p className="font-extrabold text-base xl:text-xl fullHD:text-2xl">
          {review.author}
        </p>
        <span className="color-black text-sm xl:text-base fullHD:text-lg">
          {review.date}
        </span>
      </div>
      <div className="relative w-full flex flex-nowrap items-center justify-between">
        {new Array(5).fill(null).map((_, index) => (
          <Image
            key={index}
            src={
              index < review.rating
                ? "/icons/filledRatingStar.svg"
                : "/icons/emptyRatingStar.svg"
            }
            alt="rating"
            width={34}
            height={32}
            className="shrink-0 w-[17.4%] h-auto"
            // className="shrink-0 aspect-[6] w-full"
          />
        ))}
      </div>
    </div>
  </li>
);

export default ReviewItem;
