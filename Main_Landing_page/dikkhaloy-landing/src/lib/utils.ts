import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("bn-BD")}`;
}

export function calculatePrice(students: number): number {
  if (students <= 50) return 500;
  let total = 500;
  const extra = students - 50;
  if (extra <= 50) {
    total += extra * 10;
  } else if (extra <= 150) {
    total += 50 * 10;
    total += (extra - 50) * 8;
  } else if (extra <= 450) {
    total += 50 * 10;
    total += 100 * 8;
    total += (extra - 150) * 7;
  } else {
    total += 50 * 10;
    total += 100 * 8;
    total += 300 * 7;
    total += (extra - 450) * 5;
  }
  return total;
}
