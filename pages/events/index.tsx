import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";

const AllEventsPage: FC<{ events: AppEvent[] }> = (props) => {
  const router = useRouter();

  const findEventsHandler = async (year: string, month: string) => {
    await router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();
  return { props: { events }, revalidate: 60 };
};

export default AllEventsPage;
