import BookCard from "./BookCard";
import type { BookInfo } from "@/helper/api";
import type { Nullable, ISBN } from "@/helper/types";

type Books = { [key: string]: { [key: string]: BookInfo } };
type BookShelfProps = { books: Books };

const yearSort = (a: string, b: string) => (a < b ? 1 : -1);

export default function BookShelf({ books }: BookShelfProps) {
  return (
    <div className="pb-8">
      {Object.keys(books)
        .sort(yearSort)
        .map((year: string) => (
          <div key={year}>
            <div className="divider text-2xl">{year}</div>
            <div className="flex flex-wrap sm:flex-row gap-4 ml-4">
              {Object.keys(books[year]).map((isbn: ISBN) => {
                const book = books[year][isbn];
                return (
                  <BookCard
                    key={isbn}
                    title={book.title}
                    authors={book.authors}
                    cover={book.cover}
                    isbn={isbn}
                  />
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
}

export type { Books };
