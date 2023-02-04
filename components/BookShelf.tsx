import { useState } from "react";
import BookCard from "./BookCard";
import type { BookInfo } from "@/helper/api";
import type { ISBN } from "@/helper/types";

type Books = { [key: string]: { [key: string]: BookInfo } };
type BookShelfProps = { books: Books };

const yearSort = (a: string, b: string) => (a < b ? 1 : -1);

export default function BookShelf({ books }: BookShelfProps) {
  const [toastVisible, setToastVisible] = useState(false);

  function showToast(): void {
    console.log("Show Toast")
    setToastVisible(true);
    setTimeout(() => {
      console.log("Hide Toast")
      setToastVisible(false);
    }, 3000);
  }

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
                    onClick={() => {
                      navigator.clipboard.writeText(isbn.toString());
                      showToast();
                    }}
                  />
                );
              })}
            </div>
          </div>
        ))}
      <div hidden={!toastVisible}>
        <div className="toast">
          <div className="alert alert-info">
            <div>
              <span>Copied ISBN to clipboard!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { Books };
