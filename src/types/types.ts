export type UserType = {
  name: string;
  email: string;
  number: string;
};

export type UserResponseType = UserType & {
  id: string;
  dateAdded: string;
};
