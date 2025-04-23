import { useAuthStore } from "../store/auth";
import { formatDate } from "../utils/formatDate";

const HomePage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Vous devez être connecté pour voir votre profil.</div>;
  }

  return (
    <div className="pr-10 pt-10 pl-5 pb-10 w-full">
      <div className="flex space-x-4 mb-4">
        <div className="card w-1/3 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
          </div>
        </div>
        <div className="card w-1/3 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4">
        {user ? (
          <>
            <div
            className="card w-1/3 bg-base-100 shadow-lg" >
              <figure className="relative rounded-xl shadow-lg">
                <img src={`/images/${user.avatar}`} alt="Admin" />
                  <div className="p-0 absolute card w-4/5 backdrop-blur-md bottom-0 m-4 z-30">
                    <div className="card-body p-4">
                      <h2 className="text-2xl card-title text-white">{user.firstName} {user.lastName}</h2>
                      <p className="text-white">{user.email}</p>
                      <p className="text-white">{user.birthDate ? formatDate(user.birthDate) : 'Non disponible'}</p>
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
        <div className="card w-2/3 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title"></h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 mt-4">
        <div className="card w-full bg-base-100 shadow-lg">
          <div className="card-body">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
