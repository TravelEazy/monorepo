import { redirect } from "@remix-run/server-runtime";
import { differenceInCalendarDays, parse } from "date-fns";
import * as yup from "yup";
import { HOME_PAGE } from "~/interface/routes";

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

export const Countries = ["Portugal", "Italy"] as const;

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

export function hasRequiredGetawayFormParams(searchParams: URLSearchParams) {
  return (
    !!searchParams.get(getawayFormArrivalTimeString) ||
    !!searchParams.get(getawayFormDestinationString) ||
    !!searchParams.get(getawayFormDestinationString)
  );
}

export function getTripLengthInDays(searchParams: URLSearchParams) {
  if (!hasRequiredGetawayFormParams(searchParams)) {
    throw redirect(HOME_PAGE, { status: 302 });
  }
  const arrivalDate = parse(
    searchParams.get(getawayFormArrivalTimeString) as string,
    getawayFormDateFormat,
    new Date()
  );
  const departureDate = parse(
    searchParams.get(getawayFormDepartureTimeString) as string,
    getawayFormDateFormat,
    new Date()
  );
  return differenceInCalendarDays(departureDate, arrivalDate);
}
