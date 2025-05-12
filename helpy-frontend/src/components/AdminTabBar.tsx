import Icon from '@mdi/react';
import { mdiHeartSettingsOutline } from '@mdi/js';
import { Dispatch, SetStateAction } from 'react'


type MenuItem = {
  id: string
  label: string
  icon?: string
}


const menuItems: MenuItem[] = [
  { id: 'moods', label: 'Humeurs', icon: mdiHeartSettingsOutline },
  { id: 'activities', label: 'Activités' },
  { id: 'badges', label: 'Badges' },
  { id: 'cognitive', label: 'Cognition' },
  { id: 'forum', label: 'Forum' },
  { id: 'help', label: 'Aide' },
  { id: 'nutritional', label: 'Nutrition' },
  { id: 'program', label: 'Programmes' },
  { id: 'project', label: 'Projets' },
  { id: 'resource', label: 'Ressources' },
  { id: 'service', label: 'Services' },
  { id: 'skill', label: 'Compétences' },
  { id: 'wellness', label: 'Bien-être' },
]

type AdminTabProps = {
  activeTab: 'moods' | 'activities' | 'badges' | 'cognitive' | 'forum' | 'help' | 'nutritional' | 'program' | 'project' | 'resource' | 'service' | 'skill' | 'wellness' | null
  setActiveTab: Dispatch<SetStateAction<'moods' | 'activities' | 'badges' | 'cognitive' | 'forum' | 'help' | 'nutritional' | 'program' | 'project' | 'resource' | 'service' | 'skill' | 'wellness' | null>>
}

function AdminTabBar({ activeTab, setActiveTab }: AdminTabProps) {

  return (
    <ul className="menu bg-base lg:menu-horizontal rounded-box p-0">
    {menuItems.map(({ id, label, icon }) => (
      <li key={id}>
        <a
          className={activeTab === id ? 'menu-active' : ''}
          onClick={() => setActiveTab(id as AdminTabProps['activeTab'])}
        >
          {icon && <Icon path={icon} size={0.8} className="text-white-400" />}
          {label}
        </a>
      </li>
    ))}
  </ul>
  )
}

export default AdminTabBar