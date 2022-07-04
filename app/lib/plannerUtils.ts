import { add, format } from "date-fns";
import { tempData } from "./tempData";

export enum PlannerActions {}

export interface RatingType {
  source: string;
  rating: number;
}
export function aggregateRatings(ratings: RatingType[]) {
  const rating = ratings.reduce(
    (prevVal, currVal) => {
      return {
        source: prevVal.source + ", " + currVal.source,
        rating: prevVal.rating + currVal.rating,
      };
    },
    { source: "", rating: 0 }
  );
  rating.rating = rating.rating / ratings.length;
  rating.source = rating.source.substring(2);
  return rating;
}
// export function linkToDay(dayNumber: string, searchParams: URLSearchParams) {
//   if (searchParams.has(dayQueryParam)) {
//     searchParams.delete(dayQueryParam);
//   }
//   searchParams.append(dayQueryParam, dayNumber);

//   return `?${searchParams.toString()}`;
// }

// export function getRatingUniqueIdString(name: string, ratingSource: string) {
//   return `{${name}-${ratingSource}}`;
// }

export function getFormattedDay(arrivalDate: Date, dayNumber: number) {
  return format(add(arrivalDate, { days: dayNumber }), "iii, do MMM");
}

export function getCurrentItinerary(planPosition: string) {
  const itineraryData = tempData;
  const day = parseInt(planPosition) || 0;
  return itineraryData[day];
}
