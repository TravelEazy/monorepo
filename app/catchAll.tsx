import { Link } from "@remix-run/react";

export default function CatchAll() {
  /**
   * returns a 404 page styled with tailwind css
   */
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[url(/images/bg-image.jpg)] bg-cover bg-center px-4 text-center ">
      <h1 className="text-4xl font-bold">404 Page Not Found</h1>
      <p className="max-w-md py-5">
        You found something that does not exist! You&apos;re quite the explorer!
        Time to put that skills{" "}
        <Link to="/" className="font-bold underline">
          exploring a new country
        </Link>
      </p>
    </div>
  );
}
