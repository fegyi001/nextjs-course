import { ReactNode } from "react";

import classes from "./event-content.module.css";

export interface EventContentProps {
  children: ReactNode;
}

function EventContent(props: EventContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
