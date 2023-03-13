import { GetStaticProps, GetStaticPaths } from "next";
import { FC, Fragment } from "react";

import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import { getAllEvents, getEventById } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";

const EventDetailPage: FC<{ event: AppEvent }> = (props) => {
  if (!props.event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <Fragment>
        <EventSummary title={props.event.title}></EventSummary>
        <EventLogistics
          date={props.event.date}
          address={props.event.location}
          image={props.event.image}
          imageAlt={props.event.title}
        ></EventLogistics>
        <EventContent>
          <p>{props.event.description}</p>
        </EventContent>
      </Fragment>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  if (params && params.eventId) {
    const event = await getEventById(params.eventId);
    if (!event) {
      return { notFound: true };
    }
    return { props: { event } };
  }
  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: true,
  };
};

export default EventDetailPage;
