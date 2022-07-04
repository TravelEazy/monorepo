import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { useLoaderData } from "@remix-run/react";
import React, { useRef } from "react";
import type { PlanLayoutLoaderDataType } from "~/routes/plan";
import Spinner from "../general/Spinner";
import { GoogleMapMarker } from "./GoogleMapMarker";

const render = (status: Status): React.ReactElement => {
  if (status === Status.FAILURE)
    return (
      <div className="flex h-full w-full items-center justify-start">
        Error loading maps
      </div>
    );
  return <Spinner />;
};

export default function GoogleMap({ apiKey }: { apiKey: string }) {
  const { cityCoordinates, itineraryCoordinates } =
    useLoaderData<PlanLayoutLoaderDataType>();
  const center = React.useMemo(() => cityCoordinates, [cityCoordinates]);
  const zoom = 13;

  return (
    <Wrapper apiKey={apiKey || ""} render={render}>
      <GoogleMapComponent center={center} zoom={zoom}>
        {itineraryCoordinates.map((coordinates, idx) => (
          <GoogleMapMarker position={coordinates} key={idx} />
        ))}
      </GoogleMapComponent>
    </Wrapper>
  );
}

function MyMapComponent({
  center,
  zoom,
  children,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  children: React.ReactNode;
}) {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  }, [ref, map, center, zoom]);

  return (
    <>
      <div ref={ref} id="map" className="h-full w-full" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
const GoogleMapComponent = React.memo(MyMapComponent);
