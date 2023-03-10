import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/dummy-data";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div className={styles.container}>
        <EventList items={featuredEvents}></EventList>
      </div>
    </>
  );
}
