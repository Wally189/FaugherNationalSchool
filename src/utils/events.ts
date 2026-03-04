import type { CollectionEntry } from "astro:content";

export type EventEntry = CollectionEntry<"events">;

export function sortEvents(events: EventEntry[]): EventEntry[] {
  return [...events].sort((a, b) => a.data.start.getTime() - b.data.start.getTime());
}

export function getUpcomingEvents(events: EventEntry[], fromDate: Date = new Date()): EventEntry[] {
  const fromTime = fromDate.getTime();
  return sortEvents(events).filter((event) => {
    const eventEnd = event.data.end?.getTime() ?? event.data.start.getTime();
    return eventEnd >= fromTime;
  });
}

export function getPastEvents(events: EventEntry[], fromDate: Date = new Date()): EventEntry[] {
  const fromTime = fromDate.getTime();
  return sortEvents(events)
    .filter((event) => {
      const eventEnd = event.data.end?.getTime() ?? event.data.start.getTime();
      return eventEnd < fromTime;
    })
    .reverse();
}

export function getMonthStart(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export function addMonths(date: Date, count: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

export function getEventsForMonth(events: EventEntry[], monthDate: Date): EventEntry[] {
  const month = monthDate.getMonth();
  const year = monthDate.getFullYear();

  return sortEvents(events).filter((event) => {
    const start = event.data.start;
    return start.getMonth() === month && start.getFullYear() === year;
  });
}
