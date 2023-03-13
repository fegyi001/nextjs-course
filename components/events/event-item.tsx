import { AppEvent } from "@/dummy-data";
import styles from "./event-item.module.css";
import Button from "@/components/ui/button";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";
import Image from "next/image";

export default function EventItem(props: AppEvent) {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <>
      <li className={styles.item}>
        <Image src={`/${image}`} alt="" width={250} height={160} />
        <div className={styles.content}>
          <div className={styles.summary}>
            <h2>{title}</h2>
            <div className={styles.date}>
              <DateIcon />
              <time>{humanReadableDate}</time>
            </div>
            <div className={styles.address}>
              <AddressIcon />
              <address>{formattedAddress}</address>
            </div>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={styles.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  );
}
