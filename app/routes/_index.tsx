import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "GameOn" },
  ];
};

export default function Index() {
  return (
    <div></div>
  );
}

