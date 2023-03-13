import { GetServerSideProps } from "next";
import { FC } from "react";

import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";

const FilteredEventsPage: FC<{ events: AppEvent[] }> = (props) => {
  if (props.events && props.events.length > 0) {
    return (
      <>
        <h1>Filtered events</h1>
        <EventList items={props.events}></EventList>
      </>
    );
  }
  return (
    <>
      <ErrorAlert>
        <p>No events found for the chosen filter</p>
      </ErrorAlert>
      <div className="center">
        <Button link="/events">Show All Events</Button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (
    context.params &&
    context.params.slug &&
    Array.isArray(context.params.slug) &&
    context.params.slug.length === 2
  ) {
    const slug: string[] = context.params.slug as string[];
    const year = +slug[0];
    const month = +slug[1];
    const filteredEvents = await getFilteredEvents(year, month);
    return {
      props: { events: filteredEvents },
    };
  }
  return { notFound: true };
};

export default FilteredEventsPage;
