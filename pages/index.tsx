import EventList from "@/components/events/event-list";
import styles from "@/styles/Home.module.css";
import { AppEvent } from "@/interfaces/app-event.interface";
import { FC } from "react";
import { getFeaturedEvents } from "@/helpers/api-util";

const HomePage: FC<{ events: AppEvent[] }> = (props) => {
  const { events } = props;

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
    },
  };
}

export default HomePage;
