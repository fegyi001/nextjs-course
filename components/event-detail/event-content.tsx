import classes from "./event-content.module.css";
import { ReactNode } from "react";

export interface EventContentProps {
  children: ReactNode;
}

function EventContent(props: EventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
