import { ISBN } from "@/helper/types";
type Props = { title: string; isbn: ISBN; authors: string[]; cover: string, onClick: () => void };

export default function BookCard({ title, authors, cover, isbn, onClick }: Props) {
  return (
    <div className="transition ease-in-out hover:scale-110" onClick={onClick}>
      <img src={cover} alt="Book cover" className="object-cover" />
    </div>
  );
}
