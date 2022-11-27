import { createContext } from 'react';
import { User } from 'types';

export interface IUserContext {
  user: User | null;
  setUser(user: User | null): void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});
