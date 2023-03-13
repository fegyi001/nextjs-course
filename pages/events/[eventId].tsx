import { GetStaticPaths, GetStaticProps } from "next";
import { FC, Fragment } from "react";

import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById, getFeaturedEvents } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";

const EventDetailPage: FC<{ event: AppEvent }> = (props) => {
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
    return { props: { event }, revalidate: 30 };
  }
  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    // fallback: true,
    fallback: "blocking",
  };
};

export default EventDetailPage;
