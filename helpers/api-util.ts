import { AppEvent } from "@/interfaces/app-event.interface";

export async function getAllEvents(): Promise<AppEvent[]> {
  return await fetch(
    "https://nextjs-course-fb0bb-default-rtdb.europe-west1.firebasedatabase.app/events.json",
  )
    .then((res) => res.json())
    .then((data) => {
      const events: AppEvent[] = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      return events;
    });
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string | string[]) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(year: number, month: number) {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
}
