export async function geetAllEvents() {
  return await fetch(
    "https://nextjs-course-fb0bb-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  )
    .then((res) => res.json())
    .then((data) => {
      const events = [];
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
  const allEvents = await geetAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
