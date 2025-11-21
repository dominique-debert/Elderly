export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 18) return "Bonjour";
  return "Bonsoir";
}
