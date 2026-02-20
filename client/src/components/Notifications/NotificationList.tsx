import { INotification } from "@/types";
import { Check } from "lucide-react";

type NotificationListProps = {
  notifications: INotification[];
};

export function NotificationList({
  notifications = [],
}: NotificationListProps) {
  const unreadNotifications = notifications.filter((n) => !n.read);
  const readNotifications = notifications.filter((n) => n.read);

  const NotificationItem = ({
    notification,
    isRead = false,
  }: {
    notification: INotification;
    isRead?: boolean;
  }) => (
    <li
      key={notification.id}
      className={`p-4 hover:bg-card transition-colors ${
        isRead ? "opacity-70" : ""
      }`}
    >
      <div className="flex gap-3 items-start dark:bg-card">
        <div className="shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src={`/images/notifications/${notification.type}.png`}
            alt={notification.type}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/notifications/default.png";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-900 dark:text-gray-100">
            {notification.content}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(notification.createdAt || "").toLocaleString()}
          </p>
        </div>
        {!isRead && (
          <button
            className="btn btn-primary btn-xs btn-square"
            onClick={() => {
              // Mark as read action
              alert(`Mark as read: ${notification.id}`);
            }}
          >
            <Check className="w-3 h-3" />
          </button>
        )}
      </div>
    </li>
  );

  return (
    <div
      className="dark:bg-card/50 border border-slate-300 dark:border-slate-800 rounded-2xl mt-3 w-105 max-w-screen"
      style={{
        backdropFilter: "blur(2rem)",
        WebkitBackdropFilter: "blur(2rem)",
      }}
    >
      <div className="p-6 pb-0">
        <h3 className="text-2xl font-semibold mb-2 text-primary">
          Notifications
        </h3>
        <div className="divider mb-0 mt-0"></div>
      </div>

      <div className="max-h-125 overflow-y-auto">
        {/* Unread Notifications */}
        {unreadNotifications.length > 0 ? (
          <ul className="divide-y divide-base-200">
            {unreadNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </ul>
        ) : (
          <div className="p-4 text-center text-gray-500">
            <p>Pas de nouvelles notifications</p>
          </div>
        )}

        {/* Read Notifications */}
        {readNotifications.length > 0 && (
          <div className="border-t border-base-200 mt-2">
            <div className="p-4">
              <h4 className="text-sm font-medium text-gray-500 mb-2">
                Anciennes notifications
              </h4>
              <ul className="space-y-2">
                {readNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                    isRead={true}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
