import { Form, Link, Outlet } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { getTripLengthInDays } from "~/lib/getawayForm";

export const loader: LoaderFunction = async ({ params, request }) => {
  const searchParams = new URL(request.url).searchParams;
  const tripLengthInDays = getTripLengthInDays(searchParams);
  console.log("tripLengthInDays", tripLengthInDays);
  return json({});
};

export default function SearchIndex() {
  return (
    <main className="grid grid-cols-2">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Notes</Link>
        </h1>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <main className="flex h-full flex-grow bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Note
          </Link>

          <hr />

          <p className="p-4">No notes yet</p>
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </main>
  );
}
