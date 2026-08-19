const EntryCard = ({
  title,
  date,
  imageURL,
  content,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-slate-500">
          {date}
        </p>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm text-slate-500">
          {content}
        </p>

        <p className="mt-4 text-sm font-semibold text-slate-900">
          Read entry →
        </p>
      </div>
    </li>
  );
};

export default EntryCard;