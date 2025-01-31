const formatDate = (isoString) => {
  const date = new Date(isoString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const getRelativeTime = (value, unit) => `${rtf.format(-value, unit)}`;

  if (diffInSeconds < 60) return getRelativeTime(diffInSeconds, "seconds");
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return getRelativeTime(diffInMinutes, "minutes");
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return getRelativeTime(diffInHours, "hours");
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return getRelativeTime(diffInDays, "days");
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return getRelativeTime(diffInMonths, "months");
  const diffInYears = Math.floor(diffInMonths / 12);
  return getRelativeTime(diffInYears, "years");
};

// Example Usage
const formatBlogDate = (isoString) => {
  const date = new Date(isoString);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return formattedDate;
};

const dateFormat = (isoString) => {
  return (
    <>
      <span>{formatBlogDate(isoString)}</span>
      <span className="text-2xl"> &#8729;</span>{" "}
      <span>{formatDate(isoString)}</span>
    </>
  );
};

export default dateFormat;
