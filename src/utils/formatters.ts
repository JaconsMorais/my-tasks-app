export const DateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "numeric",
  year: "numeric",
});

export const DateFormatterLong = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const DurationFormatter = new Intl.RelativeTimeFormat("pt-BR", {
  style: "long",
  numeric: "auto",
});
