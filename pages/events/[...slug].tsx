import { useRouter } from "next/router";

export default function FilteredEventsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <>
      <h1>Filtered events</h1>
    </>
  );
}
