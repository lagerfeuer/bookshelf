import { ISBN } from "@/helper/types";
type Props = { title: string; isbn: ISBN; authors: string[]; cover: string };

export default function BookCard({ title, authors, cover, isbn }: Props) {
  return (
    <div className="transition ease-in-out hover:scale-110">
      <img src={cover} alt="Book cover" className="object-cover" />
    </div>
  );
}
