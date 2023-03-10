import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>The project page for a specific project for a selected client</h1>
    </>
  );
}
