import { ISBN } from "./types";

type BookInfo = {
  authors: string[];
  title: string;
  cover: string;
};

const placeholderCover = "/imgs/book-cover-placeholder.png";

const cache: { [key: string]: BookInfo } = {};

async function getBook(isbn: ISBN): Promise<BookInfo> {
  if (isbn in cache) return cache[isbn];
  console.log(`Fetching ${isbn}...`);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
  );
  const json = await response.json();
  const item = json.items.pop();
  const info = item.volumeInfo;

  const result: BookInfo = {
    title: info.title,
    authors: info.authors,
    cover: info?.imageLinks?.thumbnail ?? placeholderCover,
  };

  cache[isbn] = result;

  return result;
}

export { getBook };

export type { BookInfo };
