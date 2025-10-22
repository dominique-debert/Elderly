import Icon from "@mdi/react";
import { Card } from "@/components";
import { mdiMagnify, mdiClose, mdiPlus } from "@mdi/js";

export function PhotoTabContent() {
  return (
    <Card className="w-full pt-4 gap-2">
      <div className="flex justify-between items-center mb-[-16px]">
        <div className="flex flex-col justify-center pt-4">
          <div className="text-xl ml-6 h-6">Mes Photos</div>
          <div className="text-sm m-6 mb-4 mt-1 text-slate-400">
            Organisez vos photos et classez les selon vos sujets préférés.
          </div>
        </div>
        <button className="btn btn-primary mr-6 btn-sm text-xs">
          <Icon path={mdiPlus} size={0.7} className="text-white" />
          Ajouter une photo
        </button>
      </div>
      <div className="divider expert-blue m-4 mt-0 mb-0 "></div>

      {/* Recherche */}
      <div className="m-0 ml-6 mr-6 mt-0">
        <label className="input flex w-full items-center dark:bg-card rounded-lg">
          <Icon path={mdiMagnify} size={0.8} className="text-slate-500" />
          <input
            type="search"
            placeholder="Rechercher une photo..."
            className="grow flex-1"
          />
          <button className="cursor-pointer">
            <Icon path={mdiClose} size={0.8} className="text-slate-500" />
          </button>
        </label>
      </div>

      <div className="flex gap-2 mt-1 p-2 mr-4 ml-4 overflow-x-auto">
        <span className="badge badge-sm text-primary bg-blue-200 p-3 rounded-lg">
          Toutes les photos
        </span>
        <span className="badge badge-sm bg-slate-700 text-slate-300 p-3 rounded-lg">
          Hobbies
        </span>
        <span className="badge badge-sm bg-slate-700 text-slate-300 p-3 rounded-lg">
          Événements familiaux
        </span>
        <span className="badge badge-sm bg-slate-700 text-slate-300 p-3 rounded-lg">
          Portraits
        </span>
      </div>
      <div className="text-base m-6 mb-4 mt-4 text-slate-300">
        Aventures de jardinage
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[-16px] pt-0 mr-6 ml-6">
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/1.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Ma petite plante dont je suis si fière, qui pousse magnifiquement
              sous le soleil matinal. Qui aurait cru qu'une petite graine
              pouvait apporter autant de joie ?
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/2.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Petit coin de jardin, baigné par une belle lumière de fin de
              matinée. Les pétales sont striés de lignes plus foncées, presque
              violettes, et au centre, un cœur jaune vif capte la lumière.
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/3.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Aujourd'hui, j'ai pris cette photo dans mon jardin. Une grappe de
              tomates rouges, mûres à point, prêtes à être cueillies. Elles sont
              tellement brillantes et rondes, une promesse de saveur
              ensoleillée.
            </div>
          </div>
        </Card>
      </div>
      <div className="text-base font-normal m-6 mb-4 mt-8 text-slate-300">
        Réunions familiales
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[-16px] pt-0 mr-6 ml-6">
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/4.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Ma fille et moi, nous avons décidé de passer l'après-midi à faire
              des tartes aux pommes, une tradition que nous chérissons. C'est
              l'histoire d'une tradition qui se perpétue, d'une recette qui se
              transmet de génération en génération.
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/5.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              un moment de joie familiale simple. Nous étions tous réunis autour
              de la table, plongés dans une partie de jeu de société.
              L'atmosphère était détendue et chaleureuse, illuminée par la
              lumière douce de la pièce.
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/6.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              J'ai pris cette photo lors d'un dîner chaleureux avec des amis
              proches. Les visages rayonnent de bonheur, reflétant l'ambiance
              conviviale et l'esprit de partage.
            </div>
          </div>
        </Card>
      </div>
      <div className="text-base m-6 mb-4 mt-8 text-slate-300">Promenades</div>
      <div className="grid grid-cols-3 gap-5 mt-[-16px] pt-0 mr-6 ml-6">
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/7.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              J'adore cette photo que j'ai prise ! Elle montre mes trois
              meilleurs amis qui se promènent tranquillement par une belle
              journée ensoleillée, le long d'un trottoir bordé d'arbres.
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/8.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Rien de tel qu'une balade le long de la plage avec ses amis pour
              se ressourcer et améliorer sa forme physique. Une petite glace
              après, ce fut parfait !
            </div>
          </div>
        </Card>
        <Card className="p-0 gap-0">
          <img
            src="../../../public/images/photos/9.png"
            alt=""
            className="object-cover w-full rounded-t-xl"
          />
          <div className="p-[20px] h-full relative bottom-0 z-10 bg-slate-700 rounded-b-xl">
            <div className="text-sm text-justify text-slate-300">
              Un moment de complicité alors que mes enfants et mon petit fils se
              promènent main dans la main dans une forêt ensoleillée.
            </div>
          </div>
        </Card>
      </div>
      <div className="flex items-center justify-center w-full p-5">
        <button className="btn btn-outline btn-slate-300 mr-6">
          <div className="text-sm">Voir plus</div>
        </button>
      </div>
    </Card>
  );
}
