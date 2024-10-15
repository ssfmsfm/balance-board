import { Review } from "../Reviews";

const SelectedReview = ({
  reviews,
  selectedReview,
}: {
  reviews: Array<Review>;
  selectedReview: Review;
}) => {
  return (
    <div className="relative grow max-md:h-[330px] max-sm:h-[360px] max-[550px]:h-[400px] max-[450px]:h-[460px] max-md:w-full">
      {reviews.map((review) => (
        <div
          key={review.id}
          className={`absolute w-full rounded-2xl xl:rounded-3xl fullHD:rounded-10 bg-orange-50 p-6 xl:p-9 fullHD:p-16 flex flex-col flex-nowrap gap-4 xl:gap-5 fullHD:gap-8 left-0 top-0 transition-opacity duration-700 ease-in ${review.id === selectedReview.id ? "opacity-100" : "opacity-0"}`}
        >
          <div className="hidden max-md:flex flex-row flex-nowrap gap-3 pb-6">
            <div className="w-14 aspect-square flex items-center justify-center font-extrabold">
              <span>{selectedReview.author.slice(0, 1).toUpperCase()}</span>
            </div>
            <div className="flex flex-col">
              <p className="font-extrabold text-xl md:text-2xl">
                {review.author}
              </p>
              <span className="color-black text-lg md:text-xl">
                {review.date}
              </span>
            </div>
          </div>
          <h2
            className={`font-allenoire text-3xl md:text-4xl xl:text-7xl fullHD:text-7.5xl leading-x-tight text-black tracking-[3px] uppercase`}
          >
            {review.reviewHeader}
          </h2>
          <p className="text-base xl:text-2xl fullHD:text-4xl tracking-wider">
            {review.reviewText}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SelectedReview;
