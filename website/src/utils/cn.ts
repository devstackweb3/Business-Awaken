import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// cn("flex flex-col", {"opacity-1 w-24 h-52": false}) | application de classes conditionelles simplifiées -> constant
