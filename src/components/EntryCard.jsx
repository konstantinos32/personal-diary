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
      className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={imageURL}
        alt={title}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-slate-500">
          {date}
        </p>

        <h2 className="text-xl font-bold text-slate-900">
          {title}
        </h2>
      </div>
    </li>
  );
};

export default EntryCard;