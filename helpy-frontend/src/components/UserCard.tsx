import { mdiCakeVariantOutline, mdiEmailOutline } from "@mdi/js";
import { formatDate } from "../utils/formatDate";
import Icon from '@mdi/react';
import { useAuthStore } from "../store/auth";

const UserCard = () => {
  
  const { user } = useAuthStore();

return (
  <div className="card w-full bg-base-100 shadow-lg border border-gray-200">
    <figure className="relative rounded-xl shadow-lg">
      {user && <img className="w-full" src={`/images/${user.avatar}`} alt="Photo utilisateur" />}
      <div className="grid grid-cols-3 my-4 bottom-0 gap-4 absolute  right-[25%] w-100">
        <div className="p-4 card backdrop-blur-md z-30 bg-primary/10 col-0 col-span-2">
          <div className="card-body p-4">
            {user && (
              <h2 className="text-2xl mb-3 card-title text-white">
                {user.firstName} {user.lastName}
              </h2>
            )}
            <div className="text-white flex align-middle">
              <Icon path={mdiEmailOutline}
                title="Email"
                size={1}
                className="text-gray-300"
                />
              <span className="ml-2 align-middle">{user && user.email}</span>
            </div>
            <div className="text-white flex align-middle">
              <Icon path={mdiCakeVariantOutline}
                title="Anniversaire"
                size={1}
                className="text-gray-300"
                />
              <span className="ml-2 mt-1">{user && user.birthDate ? formatDate(user.birthDate) : 'Non disponible'}</span>
            </div>
            {/* <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
              </div> */}
          </div>
        </div>
        <div className="p-4 card w-full backdrop-blur-md z-30 bg-primary/10 col-2">
          <div className="card-body p-4">
            <div className="text-white flex flex-col mx-auto gap-4">
              <img src="/images/expert.png" className="w-16 align-middle" alt="" />
              <h2 className="card-title text-2xl w-full text-center text-yellow-200">Expert</h2>
            </div>
          </div>
        </div>
      </div>
    </figure>
  </div>  
  );
};

export default UserCard;