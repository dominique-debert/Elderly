import { mdiCakeVariantOutline, mdiEmailOutline } from "@mdi/js";
import { useAuthStore } from "../store/auth";
import { formatDate } from "../utils/formatDate";
import Icon from '@mdi/react';

const HomePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="pr-5 pt-5 pl-2 pb-10 w-full">
      <div className="flex space-x-4 mb-4">
        <div className="card w-1/3 bg-base-100 shadow-lg border border-gray-200">
          <div className="card-body">
            <h2 className="card-title text-primary">Activité</h2>
            <p></p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-lg border border-gray-200">
          <div className="card-body text-primary">
            <h2 className="card-title">Forum</h2>
            <p></p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-lg border border-gray-200">
          <div className="card-body text-primary">
            <h2 className="card-title">Santé</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        {user ? (
          <>
            <div className="card w-1/3 bg-base-100 shadow-lg border border-gray-200 flex">
              <figure className="relative rounded-xl shadow-lg">
                <img src={`/images/${user.avatar}`} alt="Photo utilisateur" />
                  <div className="p-0 absolute card w-4/5 backdrop-blur-md bottom-0 m-4 z-30 bg-primary/30">
                    <div className="card-body p-4 w-2/3">
                      <h2 className="text-2xl mb-3 card-title text-white">{user.firstName} {user.lastName}</h2>
                      <div className="text-white flex align-middle items-center text-center">
                        <Icon path={mdiEmailOutline}
                          title="Email"
                          size={1}
                          className="text-gray-300"
                          />
                        <span className="ml-2 align-middle">{user.email}</span>
                      </div>
                      <div className="text-white flex align-middle items-center text-center">
                        <Icon path={mdiCakeVariantOutline}
                          title="Anniversaire"
                          size={1}
                          className="text-gray-300"
                          />
                        <span className="ml-2 mt-2">{user.birthDate ? formatDate(user.birthDate) : 'Non disponible'}</span>
                      </div>
                      {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                  </div>
              </figure>
            </div>
          </>
        ) : (
          <p>Les informations de profil sont introuvables.</p>
        )}
        <div className="card w-2/3 bg-base-100 shadow-lg border border-gray-200">
          <div className="card-body">
            <h2 className="card-title text-primary">Services</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 mt-4">
        <div className="card w-full bg-base-100 shadow-lg border border-gray-200">
          <div className="card-body">
            <h2 className="card-title text-primary">Médicaments</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
