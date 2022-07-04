import { AiOutlineGoogle } from "react-icons/ai";
import type { RatingType } from "~/lib/plannerUtils";
import { aggregateRatings } from "~/lib/plannerUtils";

export function Rating({
  ratings,
  identifier,
}: {
  ratings: RatingType[];
  identifier: string;
}) {
  /**
   * Rating should be out of 5
   */

  const finalRating = aggregateRatings(ratings);
  const ratingIcon = Array(10).fill(0);
  const ratingOutOfTen = Math.round(finalRating.rating * 2);

  return (
    <div
      className="flex items-center w-full tooltip"
      data-tip={`Ratings sourced from: ${finalRating.source}`}
    >
      <div className="font-bold">Average Rating:</div>
      <div className="rating-half rating rating-sm ">
        <input
          type="radio"
          name={`rating-${identifier}`}
          className="cursor-default rating-hidden"
          disabled
        />
        {ratingIcon.map((_, i) => {
          return (
            <input
              key={i}
              type="radio"
              name={`rating-${identifier}`}
              className={`mask mask-star cursor-default ${
                i % 2 === 0 ? "mask-half-1" : "mask-half-2"
              }`}
              defaultChecked={ratingOutOfTen - 1 === i}
              disabled
            />
          );
        })}
      </div>
      {finalRating.rating}
      <AiOutlineGoogle />
    </div>
  );
}
