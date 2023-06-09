import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    {
      id: "fegyi",
      name: "Fegyi",
    },
    { id: "zsofka", name: "Zsofka" },
  ];
  return (
    <>
      <h1>Clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
