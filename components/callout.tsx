export default function Callout({
  children,
  icon,
  type = "default",
  ...props
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
