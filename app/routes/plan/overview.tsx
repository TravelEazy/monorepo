import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import { json } from "@remix-run/server-runtime";
import { Accordion } from "~/components/general/Accordian";
import { ROUTE_DAY_OF_PLAN_PAGE } from "~/interface/routes";

export const loader: LoaderFunction = async ({ params, request }) => {
  return json({});
};

export default function OverviewPage() {
  const [searchParams] = useSearchParams();
  const overviewData = useLoaderData();

  return (
    <div className="grid h-full grid-cols-1 grid-rows-[1fr_96px] p-10 ">
      <div className="space-y-5 overflow-y-auto pb-4">
        <Accordion title={"Things to Do"}>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              velit excepturi veniam ipsum enim quidem! Doloribus sapiente
              corrupti illum, pariatur qui libero ipsum quaerat deserunt
              nesciunt eveniet saepe aliquam non.
            </li>
            <li>
              Delectus possimus ratione aperiam iure vel odit blanditiis
              repudiandae ad distinctio? Unde, numquam quod ullam ut obcaecati
              dolorum nesciunt ab facilis laborum deserunt quam distinctio omnis
              voluptatem consectetur asperiores hic.
            </li>
            <li>
              Consequatur, distinctio dolores voluptatibus dolor culpa fugiat ea
              eum praesentium est exercitationem sint corrupti hic! Ea deserunt
              ipsa eligendi eius corrupti iste perferendis accusantium natus
              quibusdam sequi. Consequatur, dignissimos. Praesentium?
            </li>
            <li>
              Necessitatibus autem libero nisi! Voluptates, eveniet amet
              excepturi eos cum dicta dolore magnam ipsam sit necessitatibus
              voluptatibus cupiditate officiis harum! Quisquam, repudiandae
              nulla. Laboriosam assumenda modi numquam, delectus hic illum!
            </li>
            <li>
              Hic culpa molestiae molestias facilis quia veniam unde itaque
              nihil aspernatur? Rem cum quam aperiam eius. Repellendus illo
              recusandae voluptatibus possimus, harum magni dignissimos repellat
              nam rem reprehenderit in? Expedita?
            </li>
          </ul>
        </Accordion>
        <Accordion title={"Things to See"} defaultChecked={false}>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              velit excepturi veniam ipsum enim quidem! Doloribus sapiente
              corrupti illum, pariatur qui libero ipsum quaerat deserunt
              nesciunt eveniet saepe aliquam non.
            </li>
            <li>
              Delectus possimus ratione aperiam iure vel odit blanditiis
              repudiandae ad distinctio? Unde, numquam quod ullam ut obcaecati
              dolorum nesciunt ab facilis laborum deserunt quam distinctio omnis
              voluptatem consectetur asperiores hic.
            </li>
            <li>
              Consequatur, distinctio dolores voluptatibus dolor culpa fugiat ea
              eum praesentium est exercitationem sint corrupti hic! Ea deserunt
              ipsa eligendi eius corrupti iste perferendis accusantium natus
              quibusdam sequi. Consequatur, dignissimos. Praesentium?
            </li>
            <li>
              Necessitatibus autem libero nisi! Voluptates, eveniet amet
              excepturi eos cum dicta dolore magnam ipsam sit necessitatibus
              voluptatibus cupiditate officiis harum! Quisquam, repudiandae
              nulla. Laboriosam assumenda modi numquam, delectus hic illum!
            </li>
            <li>
              Hic culpa molestiae molestias facilis quia veniam unde itaque
              nihil aspernatur? Rem cum quam aperiam eius. Repellendus illo
              recusandae voluptatibus possimus, harum magni dignissimos repellat
              nam rem reprehenderit in? Expedita?
            </li>
          </ul>
        </Accordion>
        <Accordion title={"Things to Eat"} defaultChecked={false}>
          <ul>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              velit excepturi veniam ipsum enim quidem! Doloribus sapiente
              corrupti illum, pariatur qui libero ipsum quaerat deserunt
              nesciunt eveniet saepe aliquam non.
            </li>
            <li>
              Delectus possimus ratione aperiam iure vel odit blanditiis
              repudiandae ad distinctio? Unde, numquam quod ullam ut obcaecati
              dolorum nesciunt ab facilis laborum deserunt quam distinctio omnis
              voluptatem consectetur asperiores hic.
            </li>
            <li>
              Consequatur, distinctio dolores voluptatibus dolor culpa fugiat ea
              eum praesentium est exercitationem sint corrupti hic! Ea deserunt
              ipsa eligendi eius corrupti iste perferendis accusantium natus
              quibusdam sequi. Consequatur, dignissimos. Praesentium?
            </li>
            <li>
              Necessitatibus autem libero nisi! Voluptates, eveniet amet
              excepturi eos cum dicta dolore magnam ipsam sit necessitatibus
              voluptatibus cupiditate officiis harum! Quisquam, repudiandae
              nulla. Laboriosam assumenda modi numquam, delectus hic illum!
            </li>
            <li>
              Hic culpa molestiae molestias facilis quia veniam unde itaque
              nihil aspernatur? Rem cum quam aperiam eius. Repellendus illo
              recusandae voluptatibus possimus, harum magni dignissimos repellat
              nam rem reprehenderit in? Expedita?
            </li>
          </ul>
        </Accordion>
      </div>
      <div className="h-24 p-6">
        <Link
          to={{
            pathname: ROUTE_DAY_OF_PLAN_PAGE("0"),
            search: searchParams.toString(),
          }}
          className="btn btn-block"
        >
          To Itinerary
        </Link>
      </div>
    </div>
  );
}
