import BookShelf from "@/components/BookShelf";
import { getBook } from "@/helper/api";

import type { Books } from "@/components/BookShelf";
import type { ISBN } from "@/helper/types";
import { promises as fs } from "fs";

export default function Home({ books }: { books: Books }) {
  return (
    <>
      <BookShelf books={books} />
    </>
  );
}

export async function getStaticProps() {
  const data = await (await fs.readFile("./data/books.json")).toString();
  const json = JSON.parse(data);
  const books: Books = {};
  const failed: ISBN[] = [];

  for (const year in json) {
    books[year] = {};
    for (const isbn of json[year]) {
      try {
        const bookInfo = await getBook(isbn);
        books[year][isbn] = bookInfo;
      } catch {
        failed.push(isbn);
      }
    }
  }

  if (!!failed) {
    console.log("Failed to fetch the following books:", failed);
  }

  return {
    props: {
      books,
    },
  };
}
