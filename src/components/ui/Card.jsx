export default function Card({ as: Tag = "div", hover = true, className = "", children }) {
  return (
    <Tag
      className={`rounded-[20px] bg-white p-6 shadow-sm ring-1 ring-dark/5 md:p-8 ${
        hover ? "transition duration-300 hover:-translate-y-1 hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
