import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "fegyi", clientprojectid: "projecta" },
    });
  }

  return (
    <>
      <h1>Clients projects page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </>
  );
}
