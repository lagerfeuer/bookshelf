import Navbar from "@/components/NavBar";

type Props = { title: string; children: JSX.Element };

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Navbar title={title} />
      <div>{children}</div>
    </>
  );
}
