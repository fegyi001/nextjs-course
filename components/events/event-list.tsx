import EventItem from "./event-item";
import { AppEvent } from "@/dummy-data";
import styles from "./event-list.module.css";

export default function EventList(props: { items: AppEvent[] }) {
  const { items } = props;
  return (
    <>
      <ul className={styles.list}>
        {items.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </ul>
    </>
  );
}
