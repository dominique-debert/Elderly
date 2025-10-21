import { Card, ContactCard } from "@/components";
import { useAuthStore } from "@/stores";

export function ConnexionsTabContent() {
  const { user } = useAuthStore();

  return (
    <div className="border-0 grid grid-flow-col grid-rows-2 gap-8 pt-2">
      <Card className="row-span-2 w-full">
        <span className="text-xl m-6 mb-0 mt-4" style={{ lineHeight: 0 }}>
          Mes contacts
        </span>
        <div className="divider expert-blue m-4 mt-0 mb-0"></div>
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
        {user && <ContactCard user={user} myContact={true} />}
      </Card>
      <Card className="">
        <span className="text-xl m-6 mb-0" style={{ lineHeight: 0 }}>
          Contacts suggérés
        </span>
        <div className="divider expert-blue m-4 mt-0 mb-0"></div>
        {user && <ContactCard user={user} suggested={true} />}
        {user && <ContactCard user={user} suggested={true} />}
        {user && <ContactCard user={user} suggested={true} />}
        {user && <ContactCard user={user} suggested={true} />}
      </Card>
      <Card className="">
        <span className="text-xl m-6 mb-0" style={{ lineHeight: 0 }}>
          Contacts bloqués
        </span>
        <div className="divider expert-blue m-4 mt-0 mb-0"></div>
        {user && <ContactCard user={user} blocked={true} />}
        {user && <ContactCard user={user} blocked={true} />}
        {user && <ContactCard user={user} blocked={true} />}
      </Card>
    </div>
  );
}
