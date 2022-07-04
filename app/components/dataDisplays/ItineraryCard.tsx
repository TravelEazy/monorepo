import { Transition } from "@headlessui/react";
import { useActionData, useSubmit } from "@remix-run/react";
import React from "react";
import type { tempData } from "~/lib/tempData";
import { Rating } from "./Ratings";

export default function ItineraryCard({
  data,
}: {
  data: typeof tempData[0][0];
}) {
  const submit = useSubmit();
  const actionData = useActionData();

  return (
    <>
      <div
        className={`flex cursor-pointer flex-row rounded-md p-5 shadow-lg transition-all hover:shadow-xl`}
        tabIndex={0}
        onClick={() => {
          submit(
            {
              showMoreDetails:
                actionData?.showMoreDetails === data.name ? "" : data.name,
              action: "showMoreDetails",
            },
            { method: "post", replace: true, action: window.location.href }
          );
        }}
      >
        <img
          src={data.image_url}
          alt="Attraction"
          className="mr-5 h-52 w-48 rounded-lg object-cover"
        />
        <div className="flex flex-col">
          <h2 className="mb-2 text-2xl font-bold">{data.name}</h2>
          <div className="flex space-x-3">
            {data.type_of_place?.map((placeType) => {
              return (
                <div className="badge" key={placeType}>
                  {placeType}
                </div>
              );
            })}
          </div>
          {/* <p className="">{data.description}</p> */}
          <Rating ratings={data.ratings} identifier={data.name} />
          <Price />
          <RecommendedTimeSpent />
          <OpeningHours />
          <KnownFor />
        </div>
      </div>
      <Transition
        show={actionData?.showMoreDetails === data.name}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute right-[5%] bottom-5 w-1/2 rounded-lg bg-base-100 p-5 shadow-lg shadow-blue-500/70">
          <img
            src={data.image_url}
            alt="Attraction"
            className="w-full rounded-lg object-cover "
          />
          <h2 className="text-2xl font-bold">{data.name}</h2>
          <p>{data.description}</p>
          <Rating ratings={data.ratings} identifier={data.name} />
          <Price />
          <RecommendedTimeSpent />
          <OpeningHours />
          <KnownFor />
        </div>
      </Transition>
    </>
  );
}

export function Price() {
  return (
    <div className="flex">
      <h3 className="mr-1 font-bold">Cost:</h3>
      <p>$100</p>
    </div>
  );
}

export function RecommendedTimeSpent() {
  return (
    <div className="flex">
      <h3 className="mr-1 font-bold">Recommended Time Spent: </h3>
      <p>$100</p>
    </div>
  );
}

export function OpeningHours() {
  return (
    <div className="flex">
      <h3 className="mr-1 font-bold">Opening Hours: </h3>
      <p>$100</p>
    </div>
  );
}
export function KnownFor() {
  return (
    <div className="flex">
      <h3 className="mr-1 font-bold">Known for: </h3>
      <p>$100</p>
    </div>
  );
}
