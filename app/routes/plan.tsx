import {
  NavLink,
  Outlet,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Navbar } from "~/components/general/Navbar";
import GoogleMap from "~/components/maps/GoogleMap";
import {
  ROUTE_DAY_OF_PLAN_PAGE,
  ROUTE_PLAN_OVERVIEW_PAGE,
} from "~/interface/routes";
import {
  getCityCoordinates,
  getItineraryCoordinates,
  getTripLengthInDays,
  parseGetawayFormSearchParams,
} from "~/lib/getawayFormUtils";
import { getFormattedDay } from "~/lib/plannerUtils";

export interface PlanLayoutLoaderDataType {
  ENV: { googleMapApiKey: string };
  cityCoordinates: google.maps.LatLngLiteral;
  itineraryCoordinates: google.maps.LatLngLiteral[];
  tripLengthInDaysArray: number[];
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY || "";
  const searchParams = new URL(request.url).searchParams;
  const tripLengthInDays = getTripLengthInDays(searchParams);
  const cityCoordinates = await getCityCoordinates(
    searchParams,
    googleMapApiKey
  );
  const itineraryCoordinates = await getItineraryCoordinates(
    searchParams,
    params.position || ""
  );
  console.log("itineraryCoordinates", itineraryCoordinates);
  return json({
    ENV: { googleMapApiKey },
    cityCoordinates,
    itineraryCoordinates,
    tripLengthInDaysArray: new Array(tripLengthInDays).fill(0),
  });
};

export default function PlanPage() {
  const [searchParams] = useSearchParams();
  const { ENV, tripLengthInDaysArray } =
    useLoaderData<PlanLayoutLoaderDataType>();
  const parsedQueryParams = parseGetawayFormSearchParams(searchParams);

  return (
    <div className="grid min-h-screen grid-cols-5">
      <div className="drawer z-10 col-span-2 col-start-1 shadow-xl shadow-blue-700/70">
        <input
          id="drawer-toggle-input"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <div className=" grid h-full max-h-screen grid-rows-[65px_1fr]">
            <header>
              <Navbar />
            </header>
            <main className="h-full overflow-hidden">
              <Outlet />
            </main>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="drawer-toggle-input" className="drawer-overlay" />
          <ul className="menu w-80 space-y-6 overflow-y-auto bg-base-100 py-10">
            <li>
              <NavLink
                to={{
                  pathname: ROUTE_PLAN_OVERVIEW_PAGE,
                  search: searchParams.toString(),
                }}
                className={({ isActive }) =>
                  isActive ? "btn btn-link px-4" : undefined
                }
              >
                Trip Overview
              </NavLink>
            </li>
            {tripLengthInDaysArray.map((_, index: number) => {
              return (
                <li key={index}>
                  <NavLink
                    to={{
                      pathname: ROUTE_DAY_OF_PLAN_PAGE(index.toString()),
                      search: searchParams.toString(),
                    }}
                    className={({ isActive }) =>
                      isActive ? "btn btn-active btn-link px-4" : undefined
                    }
                  >
                    Day {index + 1} -{" "}
                    {getFormattedDay(parsedQueryParams.arrivalDate, index)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="col-span-3 col-start-3 h-full max-h-screen">
        <GoogleMap apiKey={ENV.googleMapApiKey} />
      </div>
    </div>
  );
}
