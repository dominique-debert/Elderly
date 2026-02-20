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

/**
 * Formate une date au format français complet (ex: "12 novembre 2025").
 * @param date - Date ISO ou objet Date
 * @param options - Options de formatage
 * @param options.showWeekday - Afficher le jour de la semaine (défaut: false)
 * @param options.showTime - Afficher l'heure (défaut: false)
 * @param options.showSeconds - Afficher les secondes (défaut: false)
 * @param fallback - Valeur de repli si date invalide
 */
export const formatLongDate = (
  date?: string | Date,
  options: {
    showWeekday?: boolean;
    showTime?: boolean;
    showSeconds?: boolean;
  } = {},
  fallback = "Non disponible"
): string => {
  if (!date) return fallback;

  const {
    showWeekday = false,
    showTime = false,
    showSeconds = false,
  } = options;

  try {
    const dateObj = new Date(date);
    const dateOptions: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    if (showWeekday) {
      dateOptions.weekday = "long";
    }

    let formatted = dateObj.toLocaleDateString("fr-FR", dateOptions);

    if (showWeekday) {
      formatted = capitalizeFirstLetter(formatted);
    }

    if (showTime) {
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
      };

      if (showSeconds) {
        timeOptions.second = "2-digit";
      }

      const timeFormatted = dateObj.toLocaleTimeString("fr-FR", timeOptions);
      formatted += `. Il est ${timeFormatted}.`;
    }

    return formatted;
  } catch {
    return fallback;
  }
};
