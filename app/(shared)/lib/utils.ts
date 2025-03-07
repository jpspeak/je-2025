import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//

export function getRandomDateWithin24Hours() {
  const now = new Date();
  const past24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000); // 24 hours ago in milliseconds

  // Get a random timestamp between past24Hours and now
  const randomTimestamp =
    past24Hours.getTime() +
    Math.random() * (now.getTime() - past24Hours.getTime());

  // Create a new Date object with the random timestamp
  return new Date(randomTimestamp);
}

export function generateAvatarInitials(name: string): string {
  const nameArray: string[] = name.trim().split(" ");

  let initials: string = "";

  // Add the first character of the first word to initials
  if (nameArray.length > 0) {
    initials += nameArray[0].charAt(0).toUpperCase();
  }

  // Add the first character of the last word to initials
  if (nameArray.length > 1) {
    initials += nameArray[nameArray.length - 1].charAt(0).toUpperCase();
  }

  return initials;
}

export function formatRateNumber(num: number): string | number {
  // Check if the number is an integer but not zero
  if (num !== 0 && Number.isInteger(num)) {
    return `${num}.0`; // Add `.0` for integers except 0
  }
  return num; // Return the number as-is for others
}

export function formatDate(dateStr: string): string {
  const date: Date = new Date(dateStr);

  return date.toLocaleDateString("en-US", {
    month: "short", // Abbreviated month
    day: "numeric", // Day of the month
    year: "numeric", // Full year
  });
}
