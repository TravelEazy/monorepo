export function Accordion({
  title,
  children,
  defaultChecked = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultChecked?: boolean;
}) {
  return (
    <div tabIndex={0} className="collapse collapse-arrow">
      <input type="checkbox" className="peer" defaultChecked={defaultChecked} />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
}
