import { nanoid } from "nanoid";
import { UserType, UserResponseType } from "../types/types";

const STORAGE_KEY = "QuickSave";

interface Api {
  getUsers: () => Promise<UserResponseType[]>;
  addUser: (data: UserType) => Promise<UserResponseType>;
  deleteUser: (id: string) => Promise<boolean>;
}

// In real life, it would be an API running over HTTP
const api: Api = {
  getUsers: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedValue = localStorage.getItem(STORAGE_KEY);
        const items = storedValue ? JSON.parse(storedValue) : [];
        resolve(items);
      }, 200);
    });
  },
  addUser: (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        api.getUsers().then((items) => {
          const newItem = {
            id: nanoid(),
            dateAdded: new Date().toISOString(),
            ...data,
          };
          items.unshift(newItem);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
          resolve(newItem);
        });
      }, 250);
    });
  },
  deleteUser: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        api.getUsers().then((items) => {
          const filteredItems = items.filter((item) => item.id !== id);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredItems));
          resolve(filteredItems.length !== items.length);
        });
      }, 150);
    });
  },
};

export { api };
