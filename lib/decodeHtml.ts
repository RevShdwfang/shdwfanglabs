
import { decode } from "he"; // install with: npm install he
export function decodeHtml(str: string) {
  return decode(str);
}
