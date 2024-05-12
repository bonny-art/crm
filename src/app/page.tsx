import { headers } from "next/headers";
import StatusLabel, { Status } from "./components/status-label";
import Button from "./components/button";
import AddCompanyButton from "./components/add-company-button";
import ServerComponent from "./components/server-component";
import ClientComponent from "./components/client-component";

export default function Home() {
  console.log(headers());
  const id = "1";
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active} disabled>
        Active
      </StatusLabel>
      <StatusLabel status={Status.NotActive}>Not active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <Button />
      <Button disabled />
      <AddCompanyButton />

      <br />

      <ServerComponent />
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
