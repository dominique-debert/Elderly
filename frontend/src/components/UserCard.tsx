import Icon from "@mdi/react";
import { mdiCakeVariantOutline, mdiEmailOutline } from "@mdi/js";
import { formatDate } from "@/utils/formatDate";
import { useAuthStore } from "@/stores/auth";
import { motion } from "framer-motion";

const UserCard = () => {
  const { user } = useAuthStore();

  return (
    <motion.div
      className="card self-center bg-base-100 border border-base-200 w-2/3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="relative rounded-xl h-full">
        {user && (
          <img
            src={
              user.avatarUrl ?? `/images/${user.avatar || "default-avatar.svg"}`
            }
            alt="Photo utilisateur"
          />
        )}
        <div className="grid grid-cols-3 my-4 bottom-0 gap-4 absolute w-100">
          <div className="p-4 w-full h-full card backdrop-blur-md z-30 bg-primary/10 col-span-2">
            <div className="card-body p-4">
              {user && (
                <h2 className="text-2xl mb-3 card-title text-white">
                  {user.firstName} {user.lastName}
                </h2>
              )}
              <div className="text-white flex align-middle">
                <Icon
                  path={mdiEmailOutline}
                  title="Email"
                  size={1}
                  className="text-gray-300"
                />
                <span className="ml-2 align-middle">{user && user.email}</span>
              </div>
              <div className="text-white flex align-middle">
                <Icon
                  path={mdiCakeVariantOutline}
                  title="Anniversaire"
                  size={1}
                  className="text-gray-300"
                />
                <span className="ml-2 mt-1">
                  {user && user.birthDate
                    ? formatDate(user.birthDate)
                    : "Non disponible"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 card w-full backdrop-blur-md z-30 bg-primary/10 col-3">
            <div className="card-body p-4">
              <div className="text-white flex flex-col mx-auto gap-4">
                <img
                  src="/images/expert.png"
                  className="w-16 align-middle"
                  alt=""
                />
                <h2 className="card-title text-2xl w-full text-center text-yellow-200">
                  Expert
                </h2>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </motion.div>
  );
};

export default UserCard;
