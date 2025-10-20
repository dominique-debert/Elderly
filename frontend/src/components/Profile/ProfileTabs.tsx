import { PublicationTabContent } from "@/components";
import { ConnexionsTabContent } from "@/components";
import { PhotoTabContent } from "@/components";
import { InterestsTabContent } from "@/components";
import { SkillsTabContent } from "@/components";
import { PreferencesTabContent } from "@/components";

export const ProfileTabs = () => (
  <div className="tabs mt-[36px] mb-[24px]">
    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Publications"
      defaultChecked
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <PublicationTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Connexions"
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <ConnexionsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Photos"
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <PhotoTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Centres d'intérêt"
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <InterestsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Compétences"
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <SkillsTabContent />
    </div>

    <input
      type="radio"
      name="profile-tabs"
      className="tab checked:border-b-3 border-primary"
      aria-label="Préférences"
    />
    <div className="tab-content border-0 border-t border-slate-700 pt-[24px]">
      <PreferencesTabContent />
    </div>
  </div>
);
