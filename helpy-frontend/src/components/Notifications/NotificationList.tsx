import { INotification } from "../../@types/INotification";

type NotificationListProps = {
  notifications: INotification[];
};

function NotificationList({ notifications }: NotificationListProps) {
    
  return (
    <div>

      <ul className="bg-base-100 rounded-box shadow-md mt-3 p-2 w-[420px] max-w-screen">
        
        <li className="p-4 pb-2 text-2xl tracking-wide font-semibold mb-2">
          Notifications
        </li>
          
        <div role="tablist" className="tabs tabs-border p-2">
          <input type="radio" name="my_tabs_2" className="tab" aria-label="Non lues" defaultChecked />
          <div className="tab-content bg-base-100 p-4 mt-4 max-h-[650px] overflow-y-auto">
            <div className="list">
              {notifications?.map((notification: INotification) => (
                !notification.read && (
                <div key={notification.id} className="mb-4 border-b border-base-200 pb-2 flex gap-2 items-start">
                  <img className="size-8 mt-1" src={`/images/notifications/${notification.type}.png`} alt={notification.type} />
                  <div className="flex-1">
                    <div className="text-sm">{notification.content}</div>
                    <p className="text-xs text-gray-500 mb-4">{notification.content}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                          <path d="M6 3L20 12 6 21 6 3z" />
                        </g>
                      </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                )
              ))}
            </div>
          </div>

          <input type="radio" name="my_tabs_2" className="tab" aria-label="Lues" />
          <div className="tab-content bg-base-100 p-4 mt-4 max-h-[650px] overflow-y-auto">
          <div className="list">
              {notifications?.map((notification: INotification) => (
                notification.read && (
                <div key={notification.id} className="mb-4 border-b border-base-200 pb-2 flex gap-2 items-start">
                  <img className="size-8 mt-1" src={`/images/notifications/${notification.type}.png`} alt={notification.type} />
                  <div className="flex-1">
                    <div className="text-sm">{notification.content}</div>
                    <p className="text-xs text-gray-500">{notification.content}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                          <path d="M6 3L20 12 6 21 6 3z" />
                        </g>
                      </svg>
                    </button>
                    <button className="btn btn-square btn-ghost">
                      <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                )
              ))}
            </div>          
          </div>

          <input type="radio" name="my_tabs_2" className="tab" aria-label="Archivées" />
          <div className="tab-content text-gray-400 bg-base-100 p-4 max-h-[600px] overflow-y-auto mt-4">Aucune notification archivée</div>
        </div>

      </ul>    
    </div>
  )
}

export default NotificationList