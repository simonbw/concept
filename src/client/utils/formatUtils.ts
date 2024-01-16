import { intervalToDuration } from "date-fns";

const numFormat = Intl.NumberFormat("en-US", { minimumIntegerDigits: 2 });
export function formatTimestamp(start: number, end: number) {
  const {
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = intervalToDuration({
    start: start,
    end: end,
  });

  return [hours, minutes, seconds].map(numFormat.format).join(":");
}
