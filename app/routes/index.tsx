import { Form, useActionData, useTransition } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/server-runtime";
import console from "console";
import { add, format } from "date-fns";
import React from "react";
import { DataListInput } from "~/components/forms/DatalistInput";
import { FormInput } from "~/components/forms/FormInput";
import { PLAN_PAGE } from "~/interface/routes";
import type { GetawayFormErrorType, GetawayFormType } from "~/lib/getawayForm";
import {
  countryOptions,
  getawayFormArrivalTimeString,
  getawayFormDateFormat,
  getawayFormDepartureTimeString,
  getawayFormDestinationString,
  validateGetawayForm,
} from "~/lib/getawayForm";

interface ActionDataType {
  errors?: GetawayFormErrorType;
  values?: GetawayFormType;
}
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formValues = Object.fromEntries(formData);
  const formValuesArr = Array.from(formData.entries(), ([key, value]) => [
    key,
    typeof value === "string" ? value : value.name,
  ]);

  const errors = await validateGetawayForm(formValues);

  if (errors) {
    const values = Object.fromEntries(formData);
    return json({ errors, values });
  }

  const urlQueryParams = new URLSearchParams(formValuesArr);
  return redirect(`${PLAN_PAGE}?${urlQueryParams.toString()}`);
};

export default function Index() {
  const transition = useTransition();
  const actionData = useActionData<ActionDataType>();
  const isSubmitting = transition.state === "submitting";
  const [arrivalTime, setArrivalTime] = React.useState("");

  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="hero min-h-screen bg-[url(/images/bg-image.jpg)]">
        <div className="hero-overlay bg-opacity-60" />
        <div className="hero-content flex-col lg:grid lg:grid-cols-[2fr_1fr] lg:gap-5">
          <div className="p-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold lg:text-5xl ">
              Find your perfect getaway
            </h1>
            <p className="py-6 lg:text-lg">
              Fully customized trip planning so you can do what holidays are
              meant for - Relax
            </p>
          </div>

          <div className="card w-full max-w-sm bg-base-100/70 shadow-2xl">
            <div className="card-body">
              <Form method="post">
                <fieldset disabled={isSubmitting}>
                  <DataListInput
                    label="Destination"
                    options={countryOptions}
                    name={getawayFormDestinationString}
                    id="destination"
                    list="destination-list"
                    placeholder="Enter a destination"
                    error={actionData?.errors?.destination}
                    isSubmitting={isSubmitting}
                  />

                  <FormInput
                    label="arrival"
                    className="input"
                    type="datetime-local"
                    name={getawayFormArrivalTimeString}
                    id="arrival-time"
                    min={format(new Date(), getawayFormDateFormat)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      console.log("e.target.value", e.target.value);
                      setArrivalTime(e.target.value);
                    }}
                    error={actionData?.errors?.arrivalTime}
                    isSubmitting={isSubmitting}
                  />
                  <FormInput
                    label="Departure"
                    type="datetime-local"
                    className="input"
                    name={getawayFormDepartureTimeString}
                    id="departure-time"
                    min={arrivalTime}
                    max={format(
                      add(arrivalTime ? new Date(arrivalTime) : new Date(), {
                        days: 6,
                      }),
                      getawayFormDateFormat
                    )}
                    error={actionData?.errors?.departureTime}
                    isSubmitting={isSubmitting}
                  />

                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        isSubmitting ? "btn-disabled loading" : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Finding your getaway" : "Getaway Now"}
                    </button>
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
