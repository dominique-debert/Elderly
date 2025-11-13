import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/services";
import type { IUser } from "@/types";

import {
  UsersModeSwitcher,
  UsersCardView,
  UsersListView,
  UsersTableView,
} from "@/components";

type Mode = "card" | "list" | "table";

export function UsersList() {
  const [mode, setMode] = useState<Mode>(() => {
    const savedMode = localStorage.getItem("usersViewMode");
    return (savedMode as Mode) || "table";
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("usersViewMode", mode);
  }, [mode]);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const filteredUsers = (() => {
    if (!users || !Array.isArray(users)) return [];

    return users
      .filter((user: IUser) => {
        const searchLower = search.toLowerCase();
        return (
          user.firstName?.toLowerCase().includes(searchLower) ||
          user.lastName?.toLowerCase().includes(searchLower) ||
          user.email?.toLowerCase().includes(searchLower) ||
          user.city?.toLowerCase().includes(searchLower)
        );
      })
      .sort((a: IUser, b: IUser) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`
        )
      );
  })();

  return (
    <div className="w-full p-4 bg-white dark:bg-transparent">
      <UsersModeSwitcher
        mode={mode}
        setMode={setMode}
        search={search}
        setSearch={setSearch}
      />

      {isLoading ? (
        <div className="text-center mt-40">Chargement...</div>
      ) : isError ? (
        <div className="text-center mt-10 text-red-500">
          Erreur de chargement
        </div>
      ) : filteredUsers.length === 0 ? (
        <div className="text-center text-gray-500 italic mt-10">
          Aucun utilisateur ne correspond à la recherche.
        </div>
      ) : (
        <>
          {mode === "list" && <UsersListView users={filteredUsers} />}
          {mode === "card" && <UsersCardView users={filteredUsers} />}
          {mode === "table" && <UsersTableView users={filteredUsers} />}
        </>
      )}
    </div>
  );
}
