// utils/formatDate.ts
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localeData from "dayjs/plugin/localeData";

dayjs.extend(localeData);
dayjs.locale("fr");

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Formate une date en français avec jour de la semaine (ex: "Dimanche 12 mars 1967").
 * @param date - Date ISO ou objet Date
 * @param fallback - Valeur de repli si date invalide
 */
export const formatDate = (
  date?: string | Date,
  fallback = "Non disponible"
) => {
  if (!date) return fallback;

  const parsed = dayjs(date);
  return parsed.isValid()
    ? capitalizeFirstLetter(parsed.format("dddd, D MMMM YYYY"))
    : fallback;
};

export const formatMonthYear = (date: string | Date): string => {
  return new Date(date).toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
};
