import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import type { ActionFunction, LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import React from "react";
import ItineraryCard from "~/components/dataDisplays/ItineraryCard";
import StatisticGroup from "~/components/dataDisplays/statistic/StatisticGroup";
import StatisticTile from "~/components/dataDisplays/statistic/StatisticTile";
import {
  ROUTE_DAY_OF_PLAN_PAGE,
  ROUTE_PLAN_OVERVIEW_PAGE,
} from "~/interface/routes";
import { getTripLengthInDays } from "~/lib/getawayFormUtils";
import { getCurrentItinerary } from "~/lib/plannerUtils";
import { tempData } from "~/lib/tempData";

export const enum RATING_SOURCE {
  GOOGLE = "google",
  TRIP_ADVISOR = "tripAdvisor",
}

export const enum TYPE_OF_PLACE {
  HOTEL = "hotel",
  RESTAURANT = "restaurant",
  STREET_FOOD = "streetFood",
  ATTRACTION = "attraction",
  SHOPPING = "shopping",
  MUSEUM = "museum",
  NATURE = "nature",
  PARK = "park",
  VANTAGE_POINT = "vantagePoint",
}

export const enum CURRENCY {
  EUROS = "EUR",
}

export const enum DAYS_OF_WEEK {
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

export interface PlanPageLoaderDataType {
  data: typeof tempData;
  currentItinerary: typeof tempData[0];
  currentPosition: number;
  isFirstDay: boolean;
  isLastDay: boolean;
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const searchParams = new URL(request.url).searchParams;
  const tripLengthInDays = getTripLengthInDays(searchParams);

  const currentPosition = parseInt(params.position || "0") || 0;
  const isFirstDay = currentPosition === 0;
  const isLastDay = currentPosition === tripLengthInDays - 1;

  const currentItinerary = getCurrentItinerary(currentPosition.toString());
  return json({
    data: tempData,
    currentPosition,
    isFirstDay,
    isLastDay,
    currentItinerary,
  });
};

export const action: ActionFunction = async ({ params, request }) => {
  const formData = await request.formData();

  switch (formData.get("action")) {
    case "showMoreDetails":
      return json({ showMoreDetails: formData.get("showMoreDetails") });
    default:
      return json({});
  }
};

export default function PlanPage() {
  const [searchParams] = useSearchParams();
  const { currentItinerary, currentPosition, isFirstDay, isLastDay } =
    useLoaderData<PlanPageLoaderDataType>();

  return (
    <div className="h-full space-y-5 overflow-auto p-10">
      <Link
        to={{
          pathname: isFirstDay
            ? ROUTE_PLAN_OVERVIEW_PAGE
            : ROUTE_DAY_OF_PLAN_PAGE((currentPosition - 1).toString()),
          search: searchParams.toString(),
        }}
        className="btn btn-block"
      >
        {isFirstDay ? "Back to overview" : `Back to Day ${currentPosition}`}
      </Link>
      <StatisticGroup>
        <StatisticTile
          title={"Est. Cost"}
          stat="$100"
          description="For the activities in the day"
        />
        <StatisticTile
          title={"Time Spent"}
          stat="10h 20m"
          description="For the activities today"
        />
      </StatisticGroup>

      {currentItinerary.map((item: any) => {
        return <ItineraryCard data={item} key={item.name} />;
      })}
      {!isLastDay && (
        <Link
          to={{
            pathname: ROUTE_DAY_OF_PLAN_PAGE((currentPosition + 1).toString()),
            search: searchParams.toString(),
          }}
          className="btn btn-block"
        >
          Go to Day {currentPosition + 2}
        </Link>
      )}
    </div>
  );
}
