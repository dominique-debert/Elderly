import Icon from "@mdi/react";
import { Card } from "@/components";
import {
  mdiClose,
  mdiMagnify,
  mdiInformationBoxOutline,
  mdiPlus,
  mdiReload,
  mdiPencilOutline,
  mdiShareVariantOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { GripVertical } from "lucide-react";

export function SkillsTabContent() {
  return (
    <Card className="w-full pt-4 gap-2">
      <div className="flex justify-between items-center mb-[-16px]">
        <div className="flex flex-col justify-center pt-4">
          <div className="text-xl ml-6 h-4">Gestion des compétences</div>
          <div className="text-sm m-6 mb-4 mt-3 text-slate-400">
            Organisez vos compétences en collections pour mettre en valeur votre
            personnalité.
          </div>
        </div>
        <button className="btn btn-primary btn-sm mr-6 text-xs">
          <Icon path={mdiPlus} size={0.7} className="text-white" />
          Ajouter une collection
        </button>
      </div>
      <div className="divider expert-blue m-4 mt-0 mb-0 "></div>

      {/* Recherche */}
      <div className="m-0 ml-6 mr-6 mt-0">
        <label className="input flex w-full items-center dark:bg-card rounded-lg">
          <Icon path={mdiMagnify} size={0.8} className="text-slate-500" />
          <input
            type="search"
            placeholder="Rechercher une compétence..."
            className="grow flex-1"
          />
          <button className="cursor-pointer">
            <Icon path={mdiClose} size={0.8} className="text-slate-500" />
          </button>
        </label>
      </div>

      {/* Suggestions */}
      <div className="flex flex-col gap-4 border text-slate-300 border-slate-600 rounded-lg text-base mt-3 p-4 mr-6 ml-6">
        <div className="flex align-center gap-2 overflow-x-auto">
          <Icon
            path={mdiInformationBoxOutline}
            size={1}
            className="text-primary"
          />
          Quelques suggestions pour vous
        </div>
        <span className="text-xs font-light text-slate-400 mt-0">
          En fonction de votre activité, ces compétences pourraient vous plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 text-slate-400 border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Randonnée
          </span>
          <span className="badge badge-sm p-3 text-slate-400 border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Arts numériques
          </span>
          <span className="badge badge-sm p-3 text-slate-400 border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Podcasting
          </span>
          <span className="badge badge-sm p-3 text-slate-400 border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiReload}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Plus de suggestions
          </span>
        </div>
      </div>

      {/* Mock 1 */}
      <div className="flex flex-col gap-4 border text-slate-300 border-slate-600 rounded-lg text-base mt-3 p-4 mr-6 ml-6">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <GripVertical size={18} className="text-slate-600" />
            Sports
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>

            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-red-600"
              />
            </button>
          </div>
        </div>
        <span className="text-xs font-light text-slate-400 mt-0">
          En fonction de votre activité, ces compétences pourraient vous plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 text-blue-300 border-blue-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-blue-300" />
            Footing
          </span>
          <span className="badge badge-sm p-3 text-blue-300 border-blue-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-blue-300" />
            Yoga
          </span>
          <span className="badge badge-xs text-xs p-3 text-blue-300 border-blue-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-blue-300" />
            Musculation
          </span>
          <span className="badge badge-sm p-3 text-slate-600 border-slate-600 rounded-xl bg-transparent border-dashed">
            <Icon
              path={mdiPlus}
              size={0.5}
              className="text-slate-600 space-x-2.5 space-y-4"
            />
            Ajouter
          </span>
        </div>
      </div>

      {/* Mock 2 */}
      <div className="flex flex-col gap-4 border text-slate-300 border-slate-600 rounded-lg text-base mt-3 p-4 mr-6 ml-6">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <GripVertical size={18} className="text-slate-600" />
            Art
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-red-600"
              />
            </button>
          </div>
        </div>
        <span className="text-xs font-light text-slate-400 mt-0">
          En fonction de votre activité, ces compétences pourraient vous plaire.
        </span>
        <div className="flex gap-2 mt-1">
          <span className="badge badge-sm p-3 text-orange-300 border-orange-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-orange-300" />
            Photographie
          </span>
          <span className="badge badge-sm p-3 text-orange-300 border-orange-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-orange-300" />
            Peinture
          </span>
          <span className="badge badge-xs text-xs p-3 text-orange-300 border-orange-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-orange-300" />
            Ecriture
          </span>
          <span className="badge badge-sm p-3 text-slate-600 border-slate-600 rounded-xl bg-transparent border-dashed">
            <Icon
              path={mdiPlus}
              size={0.5}
              className="text-slate-600 space-x-2.5 space-y-4"
            />
            Ajouter
          </span>
        </div>
      </div>

      {/* Mock 3 */}
      <div className="flex flex-col gap-4 border text-slate-300 border-slate-600 rounded-lg text-base mt-3 p-4 mr-6 ml-6">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <GripVertical size={18} className="text-slate-600" />
            Technologie
          </div>
          <div className="flex items-center gap-2">
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-blue-600"
              />
            </button>
            <button className="cursor-pointer btn btn-ghost h-8 w-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="text-slate-600 space-x-2.5 space-y-4 hover:text-red-600"
              />
            </button>
          </div>
        </div>

        <span className="text-xs font-light text-slate-400 mt-0">
          En fonction de votre activité, ces compétences pourraient vous plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 text-green-300 border-green-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-300" />
            Gadgets
          </span>
          <span className="badge badge-sm p-3 text-green-300 border-green-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-300" />
            Internet
          </span>
          <span className="badge badge-xs text-xs p-3 text-green-300 border-green-300 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-300" />
            Intelligence artificielle
          </span>
          <span className="badge badge-sm p-3 text-slate-600 border-slate-600 rounded-xl bg-transparent border-dashed">
            <Icon
              path={mdiPlus}
              size={0.5}
              className="text-slate-600 space-x-2.5 space-y-4"
            />
            Ajouter
          </span>
        </div>
      </div>
    </Card>
  );
}
