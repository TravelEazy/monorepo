import { Client } from "@googlemaps/google-maps-services-js";
import { redirect } from "@remix-run/server-runtime";
import { differenceInCalendarDays, parseISO } from "date-fns";
import * as yup from "yup";
import { ROUTE_HOME_PAGE } from "~/interface/routes";
import { tempData } from "./tempData";

export interface GetawayFormType {
  destination: string;
  arrivalTime: string;
  departureTime: string;
}
export interface GetawayFormErrorType {
  destination?: string;
  arrivalTime?: string;
  departureTime?: string;
}

export const Countries = ["Porto, Portugal", "Italy"] as const;

export const countryOptions = Countries.map((country) => ({
  name: country,
  value: country,
}));
export const getawayFormDateFormat = "yyyy-MM-dd'T'HH:mm";
export const getawayFormArrivalTimeString = "arrivalTime";
export const getawayFormDepartureTimeString = "departureTime";
export const getawayFormDestinationString = "destination";

export async function validateGetawayForm(form: {
  [k: string]: FormDataEntryValue;
}) {
  const validator = yup.object().shape({
    destination: yup
      .string()
      .required("A destination is required!")
      .matches(new RegExp(`(${Countries.join("|")})`, "i"), {
        message: "Please choose an option from the list!",
      }),
    arrivalTime: yup.date().typeError("When will you be flying over?"),
    departureTime: yup
      .date()
      .typeError("When do you want to come back to reality?"),
  });
  try {
    await validator.validateSync(form, { abortEarly: false });
  } catch (e) {
    console.log("e", e);
    const errs = e as yup.ValidationError;
    const errors = errs.inner.reduce((prevVal, currVal) => {
      if (!currVal.path) {
        console.log("currVal.path", currVal.path);
        return prevVal;
      }
      return { ...prevVal, [currVal.path]: currVal.errors[0] };
    }, {});
    return errors;
  }
}

export function isMissingGetawayFormParams(searchParams: URLSearchParams) {
  return (
    !searchParams.get(getawayFormArrivalTimeString) ||
    !searchParams.get(getawayFormDestinationString) ||
    !searchParams.get(getawayFormDepartureTimeString)
  );
}

export function assertGetawayFormSearchParamsPresent(
  searchParams: URLSearchParams
) {
  if (isMissingGetawayFormParams(searchParams)) {
    throw redirect(ROUTE_HOME_PAGE, { status: 302 });
  }
}

export function parseGetawayFormSearchParams(searchParams: URLSearchParams) {
  assertGetawayFormSearchParamsPresent(searchParams);

  return {
    destination: searchParams.get(getawayFormDestinationString) as string,
    arrivalDate: parseISO(
      searchParams.get(getawayFormArrivalTimeString) as string
    ),
    departureDate: parseISO(
      searchParams.get(getawayFormDepartureTimeString) as string
    ),
  };
}

export function getTripLengthInDays(searchParams: URLSearchParams) {
  assertGetawayFormSearchParamsPresent(searchParams);
  const { arrivalDate, departureDate } =
    parseGetawayFormSearchParams(searchParams);

  return differenceInCalendarDays(departureDate, arrivalDate);
}

export async function getCityCoordinates(
  searchParams: URLSearchParams,
  googleMapApiKey: string
) {
  assertGetawayFormSearchParamsPresent(searchParams);
  const client = new Client({});
  console.log("googleMapApiKey", googleMapApiKey);
  try {
    const result = await client.geocode({
      params: {
        key: googleMapApiKey,
        address: searchParams.get(getawayFormDestinationString) as string,
      },
    });
    if (result.data.status === "OK") {
      return result.data.results[0].geometry.location;
    } else {
      console.log("result.data.status", result.data.status);
      throw new Error("Error fetching data");
    }
  } catch (e) {
    console.error("Error getting geo-coded city location ");
  }
}

export async function getItineraryCoordinates(
  searchParams: URLSearchParams,
  day: string
) {
  assertGetawayFormSearchParamsPresent(searchParams);
  const destination = searchParams.get(getawayFormDestinationString);

  if (!day) {
    // if empty string, we are most probably on overview page
    return [];
  }

  const dayInt = parseInt(day) || 0;
  const itineraryCoordData = tempData[dayInt].map((data) => {
    return data.coordinates;
  });

  return itineraryCoordData;
}
