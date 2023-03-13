import { GetServerSideProps } from "next";
import { FC } from "react";

import EventList from "@/components/events/event-list";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import ResultsTitle from "@/components/ui/results-title";
import { getFilteredEvents } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";

const FilteredEventsPage: FC<{
  events: AppEvent[];
  hasError?: boolean;
  numYear?: number;
  numMonth?: number;
}> = (props) => {
  if (!props.hasError && props.numYear && props.numMonth) {
    const date = new Date(props.numYear, props.numMonth - 1);
    return (
      <>
        <ResultsTitle date={date} />
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
  const { params } = context;

  if (
    params &&
    params.slug &&
    Array.isArray(params.slug) &&
    params.slug.length === 2
  ) {
    const slug: string[] = params.slug as string[];
    const year = +slug[0];
    const month = +slug[1];
    const filteredEvents = await getFilteredEvents(year, month);
    if (filteredEvents.length === 0) {
      return { props: { hasError: true } };
    }
    return {
      props: { events: filteredEvents, numYear: year, numMonth: month },
    };
  }
  return {
    props: {
      hasError: true,
    },
    // notFound: true,
    // redirect: { destination: "/error" }
  };
};

export default FilteredEventsPage;
