import { FC } from "react";

import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helpers/api-util";
import { AppEvent } from "@/interfaces/app-event.interface";
import styles from "@/styles/Home.module.css";

const HomePage: FC<{ events: AppEvent[] }> = (props) => {
  return (
    <>
      <div className={styles.container}>
        <EventList items={props.events}></EventList>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
      revalidate: 1800,
    },
  };
}

export default HomePage;
