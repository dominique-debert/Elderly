import Icon from "@mdi/react";
import { mdiMagnify, mdiClose, mdiPlus } from "@mdi/js";
import { Card, ContactCard } from "@/components";
import { IUser } from "@/types";

export function ConnexionsTabContent() {
  // Mock data - 15 contacts
  const mockContacts: IUser[] = [
    // My Contacts (8)
    {
      id: "1",
      firstName: "Jean",
      lastName: "Dupont",
      email: "jean.dupont@gmail.com",
      avatarUrl: "/images/users/1.png",
      profession: "Infirmière",
      city: "Paris",
      postalCode: "75001",
      phone: "06 12 34 56 78",
      description: "Passionnée par les soins et l'aide aux personnes âgées.",
      latitude: "48.856614",
      longitude: "2.352222",
    } as IUser,
    {
      id: "2",
      firstName: "Sophie",
      lastName: "Fabre",
      email: "sophie.fabre@gmail.com",
      avatarUrl: "/images/users/2.png",
      profession: "Retraité",
      city: "Lyon",
      postalCode: "69001",
      phone: "06 23 45 67 89",
      description: "Ancien professeur, j'aime partager mes connaissances.",
      latitude: "45.764043",
      longitude: "4.835659",
    } as IUser,
    {
      id: "3",
      firstName: "Emilien",
      lastName: "Bernard",
      email: "emilien.bernard@gmail.com",
      avatarUrl: "/images/users/3.png",
      profession: "Bénévole",
      city: "Marseille",
      postalCode: "13001",
      phone: "06 34 56 78 90",
      description: "Active dans plusieurs associations locales.",
      latitude: "43.296482",
      longitude: "5.36978",
    } as IUser,
    {
      id: "4",
      firstName: "Veronica",
      lastName: "Dubois",
      email: "veronica.dubois@gmail.com",
      avatarUrl: "/images/users/4.png",
      profession: "Médecin",
      city: "Toulouse",
      postalCode: "31000",
      phone: "06 45 67 89 01",
      description: "Médecin généraliste depuis 30 ans.",
      latitude: "43.604652",
      longitude: "1.444209",
    } as IUser,
    {
      id: "5",
      firstName: "Eric",
      lastName: "Petit",
      email: "eric.petit@gmail.com",
      avatarUrl: "/images/users/5.png",
      profession: "Aide-soignante",
      city: "Nice",
      postalCode: "06000",
      phone: "06 56 78 90 12",
      description: "Dévouée aux soins à domicile.",
      latitude: "43.710173",
      longitude: "7.261953",
    } as IUser,
    {
      id: "6",
      firstName: "Eva",
      lastName: "Robert",
      email: "eva.robert@gmail.com",
      avatarUrl: "/images/users/6.png",
      profession: "Retraité",
      city: "Nantes",
      postalCode: "44000",
      phone: "06 67 89 01 23",
      description: "Amateur de jardinage et bricolage.",
      latitude: "47.218371",
      longitude: "-1.553621",
    } as IUser,
    {
      id: "7",
      firstName: "Christine",
      lastName: "Richard",
      email: "christine.richard@gmail.com",
      avatarUrl: "/images/users/7.png",
      profession: "Psychologue",
      city: "Strasbourg",
      postalCode: "67000",
      phone: "06 78 90 12 34",
      description: "Spécialisée en gérontologie.",
      latitude: "48.573405",
      longitude: "7.752111",
    } as IUser,
    {
      id: "8",
      firstName: "Joseph",
      lastName: "Simon",
      email: "joseph.simon@gmail.com",
      avatarUrl: "/images/users/8.png",
      profession: "Kinésithérapeute",
      city: "Bordeaux",
      postalCode: "33000",
      phone: "06 89 01 23 45",
      description: "Spécialiste en rééducation.",
      latitude: "44.837789",
      longitude: "-0.57918",
    } as IUser,
    // Suggested Contacts (4)
    {
      id: "9",
      firstName: "Thierry",
      lastName: "Moreau",
      email: "thierry.moreau@gmail.com",
      avatarUrl: "/images/users/9.png",
      profession: "Coach de vie",
      city: "Lille",
      postalCode: "59000",
      phone: "06 90 12 34 56",
      description: "Accompagnement vers le bien-être.",
      latitude: "50.62925",
      longitude: "3.057256",
    } as IUser,
    {
      id: "10",
      firstName: "Laurent",
      lastName: "Leroy",
      email: "laurent.leroy@gmail.com",
      avatarUrl: "/images/users/10.png",
      profession: "Animateur social",
      city: "Rennes",
      postalCode: "35000",
      phone: "06 01 23 45 67",
      description: "Organisation d'activités pour seniors.",
      latitude: "48.117266",
      longitude: "-1.677793",
    } as IUser,
    {
      id: "11",
      firstName: "Jacques",
      lastName: "Girard",
      email: "jacques.girard@gmail.com",
      avatarUrl: "/images/users/11.png",
      profession: "Nutritionniste",
      city: "Montpellier",
      postalCode: "34000",
      phone: "06 12 34 56 78",
      description: "Conseils en alimentation santé.",
      latitude: "43.610769",
      longitude: "3.876716",
    } as IUser,
    {
      id: "12",
      firstName: "Alain",
      lastName: "Roux",
      email: "alain.roux@gmail.com",
      avatarUrl: "/images/users/12.png",
      profession: "Coach sportif",
      city: "Grenoble",
      postalCode: "38000",
      phone: "06 23 45 67 89",
      description: "Activités physiques adaptées.",
      latitude: "45.188529",
      longitude: "5.724524",
    } as IUser,
    // Blocked Contacts (3)
    {
      id: "13",
      firstName: "Mamadou",
      lastName: "N'Guer",
      email: "mamadou.nguer@gmail.com",
      avatarUrl: "/images/users/13.png",
      profession: "Commerçante",
      city: "Dijon",
      postalCode: "21000",
      phone: "06 34 56 78 90",
      description: "Comportement inapproprié.",
      latitude: "47.322047",
      longitude: "5.04148",
    } as IUser,
    {
      id: "14",
      firstName: "Josie",
      lastName: "Gauthier",
      email: "josie.gauthier@gmail.com",
      avatarUrl: "/images/users/14.png",
      profession: "Informaticien",
      city: "Angers",
      postalCode: "49000",
      phone: "06 45 67 89 01",
      description: "Spam répété.",
      latitude: "47.478419",
      longitude: "-0.563166",
    } as IUser,
    {
      id: "15",
      firstName: "Monique",
      lastName: "Mercier",
      email: "monique.mercier@gmail.com",
      avatarUrl: "/images/users/15.png",
      profession: "Retraitée",
      city: "Tours",
      postalCode: "37000",
      phone: "06 56 78 90 12",
      description: "Messages non sollicités.",
      latitude: "47.394144",
      longitude: "0.68484",
    } as IUser,
  ];

  // Séparation des contacts par catégorie
  const myContacts = mockContacts.slice(0, 8);
  const suggestedContacts = mockContacts.slice(8, 12);
  const blockedContacts = mockContacts.slice(12, 15);

  return (
    <Card className="w-full pt-4 gap-0 bg-white dark:bg-card shadow-md">
      <div className="flex justify-between items-center -mb-4">
        <div className="flex flex-col justify-center pt-4">
          <div className="text-xl ml-6 h-6">Mes Connexions</div>
          <div className="text-sm m-6 mb-2 mt-1 text-slate-400">
            Organisez et gerez vos connexions.
          </div>
        </div>
        <button className="btn btn-primary mr-6">
          <Icon path={mdiPlus} size={0.7} className="text-white" />
          Ajouter une connexion
        </button>
      </div>
      <div className="divider expert-blue m-4 mb-2"></div>

      {/* Recherche */}
      <div className="m-0 ml-6 mr-6 mt-0 mb-2">
        <label className="input flex w-full items-center bg-white dark:border-slate-800 dark:bg-card rounded-lg">
          <Icon path={mdiMagnify} size={0.8} className="text-slate-500" />
          <input type="search" placeholder="Rechercher une connexion..." />
          <button className="cursor-pointer">
            <Icon path={mdiClose} size={0.8} className="text-slate-500" />
          </button>
        </label>
      </div>

      <div className="border-0 grid grid-flow-col grid-rows-2 gap-5 pt-2 pl-6 pr-6">
        {/* Mes contacts */}
        <Card className="row-span-2 w-full overflow-y-auto gap-0 p-0 bg-white dark:bg-card">
          <span className="flex items-center text-xl m-6 mb-0 mt-4">
            Mes contacts
            <span className="badge text-xs font-light ml-4 rounded-full bg-secondary text-white h-6 w-4">
              {myContacts.length}
            </span>
          </span>
          <div className="divider expert-blue m-4 mt-1 mb-4"></div>
          {myContacts.map((contact) => (
            <ContactCard key={contact.id} user={contact} myContact={true} />
          ))}
        </Card>

        {/* Contacts suggérés */}
        <Card className="overflow-y-auto gap-0 p-0 bg-white dark:bg-card">
          <span className="flex items-center text-xl m-6 mb-0 mt-4">
            Demandes de connexion
            <span className="badge text-xs font-light ml-4 rounded-full bg-secondary text-white h-6 w-4">
              {suggestedContacts.length}
            </span>
          </span>
          <div className="divider expert-blue m-4 mt-1 mb-4"></div>
          {suggestedContacts.map((contact) => (
            <ContactCard key={contact.id} user={contact} suggested={true} />
          ))}
        </Card>

        {/* Contacts bloqués */}
        <Card className="overflow-y-auto gap-0 p-0 bg-white dark:bg-card">
          <span className="flex items-center text-xl m-6 mb-0 mt-4">
            Contacts bloqués
            <span className="badge text-xs font-light ml-4 rounded-full bg-secondary text-white h-6 w-4">
              {blockedContacts.length}
            </span>
          </span>
          <div className="divider expert-blue m-4 mt-1 mb-4"></div>
          {blockedContacts.map((contact) => (
            <ContactCard key={contact.id} user={contact} blocked={true} />
          ))}
        </Card>
      </div>
    </Card>
  );
}
