import { INotification } from "@/types";

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
      className={`p-4 hover:bg-base-200 transition-colors ${
        isRead ? "opacity-70" : ""
      }`}
    >
      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0">
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
            className="btn btn-ghost btn-sm btn-square"
            onClick={() => {
              // Mark as read action
              console.log("Mark as read", notification.id);
            }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        )}
      </div>
    </li>
  );

  return (
    <div className="bg-base-100 rounded-box shadow-md mt-3 w-[420px] max-w-screen">
      <div className="p-4 pb-2">
        <h3 className="text-2xl font-semibold mb-2">Notifications</h3>
      </div>

      <div className="max-h-[500px] overflow-y-auto">
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
