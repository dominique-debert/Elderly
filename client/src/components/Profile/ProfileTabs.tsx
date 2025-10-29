import { PublicationTabContent } from "@/components";
import { ConnexionsTabContent } from "@/components";
import { PhotoTabContent } from "@/components";
import { InterestsTabContent } from "@/components";
import { SkillsTabContent } from "@/components";
import { PreferencesTabContent } from "@/components";

export const ProfileTabs = () => (
  <div className="tabs mt-9 mb-6">
    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Publications"
      defaultChecked
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <PublicationTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Connexions"
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <ConnexionsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Photos"
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <PhotoTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Centres d'intérêt"
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <InterestsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Compétences"
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <SkillsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Préférences"
    />
    <div className="tab-content border-0 rounded-none dark:border-slate-700 border-slate-300 pt-6">
      <PreferencesTabContent />
    </div>
  </div>
);
