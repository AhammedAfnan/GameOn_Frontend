import type { MetaFunction } from "@remix-run/node";
import Banner from "~/components/User/Banner";


export const meta: MetaFunction = () => {
  return [
    { title: "GameOn" },
    { name: "description",
      content: "Book football matches effortlessly with GameOn. Find available slots, reserve fields, and enjoy your game with ease!"
    }
  ];
};

export default function Index() {
  return (
    <div>
      <Banner />
      <div>Find your favorite club</div>
    </div>
  );
}

