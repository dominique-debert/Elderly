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

export function InterestsTabContent() {
  return (
    <Card className="w-full pt-4 gap-2">
      <div className="flex justify-between items-center -mb-4">
        <div className="flex flex-col justify-center pt-4">
          <div className="text-xl ml-6 h-6">Gestion des centres d'intérêt</div>
          <div className="text-sm m-6 mb-4 mt-1 dark:text-slate-400">
            Organisez vos centres d'intérêt en collections pour mettre en valeur
            votre personnalité.
          </div>
        </div>
        <button className="btn btn-primary mr-6">
          <Icon path={mdiPlus} size={0.7} className="text-white" />
          Ajouter une collection
        </button>
      </div>
      <div className="divider expert-blue m-4 mt-0 mb-0 "></div>

      {/* Recherche */}
      <div className="m-0 ml-6 mr-6 mt-0">
        <label className="input bg-white flex w-full items-center dark:bg-card rounded-lg dark:border-slate-800">
          <Icon path={mdiMagnify} size={0.8} className="text-slate-500" />
          <input
            type="search"
            placeholder="Rechercher un centre d'intérêt..."
            className="grow flex-1"
          />
          <button className="cursor-pointer">
            <Icon path={mdiClose} size={0.8} className="text-slate-500" />
          </button>
        </label>
      </div>

      {/* Suggestions */}
      <Card className="flex flex-col gap-4 text-base mt-3 p-4 mr-6 ml-6 shadow-none">
        <div className="flex align-center gap-2 overflow-x-auto">
          <Icon
            path={mdiInformationBoxOutline}
            size={0.8}
            className="text-primary"
          />
          Quelques suggestions pour vous
        </div>
        <span className="text-xs font-light dark:text-slate-400 mt-0">
          En fonction de votre activité, ces centres d'intérêt pourraient vous
          plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 dark:text-slate-400 dark:border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Randonnée
          </span>
          <span className="badge badge-sm p-3 dark:text-slate-400 dark:border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Arts numériques
          </span>
          <span className="badge badge-sm p-3 dark:text-slate-400 dark:border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiPlus}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Podcasting
          </span>
          <span className="badge badge-sm p-3 dark:text-slate-400 dark:border-slate-600 rounded-xl bg-transparent">
            <Icon
              path={mdiReload}
              size={0.6}
              className="text-primary space-x-2.5 space-y-4"
            />
            Plus de suggestions
          </span>
        </div>
      </Card>

      {/* Mock 1 */}
      <Card className="flex flex-col gap-4 text-base mt-3 p-4 mr-6 ml-6 shadow-none">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-4">
            <GripVertical size={18} className="text-slate-600" />
            Sports
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer btn bg-warning/10 text-warning size-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
            <button className="cursor-pointer btn bg-primary/10 text-primary size-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>

            <button className="cursor-pointer btn bg-red-600/10 text-red-400 size-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
          </div>
        </div>
        <span className="text-xs font-light dark:text-slate-400 mt-0">
          En fonction de votre activité, ces centres d'intérêt pourraient vous
          plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 text-blue-500 border-blue-500 dark:text-blue-300 dark:border-blue-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-blue-300 text-blue-600"
            />
            Footing
          </span>
          <span className="badge badge-sm p-3 text-blue-500 border-blue-500 dark:text-blue-300 dark:border-blue-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-blue-300 text-blue-600"
            />
            Yoga
          </span>
          <span className="badge badge-xs text-xs p-3 text-blue-500 border-blue-500 dark:text-blue-300 dark:border-blue-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-blue-300 text-blue-600"
            />
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
      </Card>

      {/* Mock 2 */}
      <Card className="flex flex-col gap-4 text-base mt-3 p-4 mr-6 ml-6 shadow-none">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-4">
            <GripVertical size={18} className="text-slate-600" />
            Art
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer btn bg-warning/10 text-warning size-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
            <button className="cursor-pointer btn bg-primary/10 text-primary size-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
            <button className="cursor-pointer btn bg-red-600/10 text-red-400 size-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
          </div>
        </div>
        <span className="text-xs font-light dark:text-slate-400 mt-0">
          En fonction de votre activité, ces centres d'intérêt pourraient vous
          plaire.
        </span>
        <div className="flex gap-2 mt-1">
          <span className="badge badge-sm p-3 text-orange-400 border-orange-400 dark:text-orange-300 dark:border-orange-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-orange-300 text-orange-400"
            />
            Photographie
          </span>
          <span className="badge badge-sm p-3 text-orange-400 border-orange-400 dark:text-orange-300 dark:border-orange-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-orange-300 text-orange-400"
            />
            Peinture
          </span>
          <span className="badge badge-sm p-3 text-orange-400 border-orange-400 dark:text-orange-300 dark:border-orange-300 rounded-xl bg-transparent">
            <GripVertical
              size={12}
              className="dark:text-orange-300 text-orange-400"
            />
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
      </Card>

      {/* Mock 3 */}
      <Card className="flex flex-col gap-4 text-base mt-3 p-4 mr-6 ml-6 shadow-none">
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-4">
            <GripVertical size={18} className="text-slate-600" />
            Technologie
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer btn bg-warning/10 text-warning size-8 p-0">
              <Icon
                path={mdiShareVariantOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
            <button className="cursor-pointer btn bg-primary/10 text-primary size-8 p-0">
              <Icon
                path={mdiPencilOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
            <button className="cursor-pointer btn bg-red-600/10 text-red-400 size-8 p-0">
              <Icon
                path={mdiTrashCanOutline}
                size={0.8}
                className="space-x-2.5 space-y-4"
              />
            </button>
          </div>
        </div>

        <span className="text-xs font-light dark:text-slate-400 mt-0">
          En fonction de votre activité, ces centres d'intérêt pourraient vous
          plaire.
        </span>
        <div className="flex gap-2 mt-1 overflow-x-auto">
          <span className="badge badge-sm p-3 text-green-600 border-green-600 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-600" />
            Gadgets
          </span>
          <span className="badge badge-sm p-3 text-green-600 border-green-600 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-600" />
            Internet
          </span>
          <span className="badge badge-xs text-xs p-3 text-green-600 border-green-600 rounded-xl bg-transparent">
            <GripVertical size={12} className="text-green-600" />
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
      </Card>
    </Card>
  );
}
