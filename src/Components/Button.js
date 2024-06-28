export default function Button({
  className = "",
  children,
  onClick,
  raduis = 8,
  fs = 16,
  padding = "15px 20px",
}) {
  return (
    <button
      style={{
        borderRadius: `${raduis}px`,
        fontSize: `${fs}px `,
        padding: padding,
      }}
      className={`${className ? className : ""} btn`}
      onClick={onClick ? onClick : null}
    >
      {children}
    </button>
  );
}
