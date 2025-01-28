export const relativeTimeFormatter = new Intl.RelativeTimeFormat('pt-BR', {
  numeric: 'auto',
});

export function relativeTime(data: string) {
  const actualDate = new Date();
  const pastDate = new Date(data);
  const diffMs = actualDate.getTime() - pastDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return relativeTimeFormatter.format(-diffDays, 'day');
}
