import { NavLink } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function PageBreadcrumbs({
  items,
  className = "",
}: PageBreadcrumbsProps) {
  return (
    <div className={`breadcrumbs text-slate-500 text-xs mb-6 ${className}`}>
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={
                isLast ? "text-slate-300 text-medium pointer-events-none" : ""
              }
            >
              {item.path && !isLast ? (
                <NavLink to={item.path}>{item.label}</NavLink>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
