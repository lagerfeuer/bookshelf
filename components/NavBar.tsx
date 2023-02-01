type Props = { title: string };

export default function NavBar({ title }: Props) {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl">{title}</a>
    </div>
  );
}
