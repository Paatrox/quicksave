import { nanoid } from "nanoid";
import { UserResponseType, UserType } from "../types/types";

const STORAGE_KEY = "QuickSave";

interface Api {
  getUsers: () => Promise<UserResponseType[]>;
  addUser: (data: UserType) => Promise<UserResponseType>;
  deleteUser: (id: string) => Promise<boolean>;
}

const getStoredUsers = (): UserResponseType[] => {
  const storedValue = localStorage.getItem(STORAGE_KEY);
  return storedValue ? JSON.parse(storedValue) : [];
};

const setStoredUsers = (users: UserResponseType[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

const api: Api = {
  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getStoredUsers());
      }, 200);
    });
  },
  addUser: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = getStoredUsers();
        const newItem = {
          id: nanoid(),
          dateAdded: new Date().toISOString(),
          ...data,
        };
        users.unshift(newItem);
        setStoredUsers(users);
        resolve(newItem);
      }, 250);
    });
  },
  deleteUser: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = getStoredUsers();
        const filteredUsers = users.filter((user) => user.id !== id);
        const isDeleted = filteredUsers.length !== users.length;
        setStoredUsers(filteredUsers);
        resolve(isDeleted);
      }, 150);
    });
  },
};

export { api };
