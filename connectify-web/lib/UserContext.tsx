import { createContext, useContext, useEffect, useState } from 'react';
import { setupUser, getUser } from './userSetup';

const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const userData = await setupUser();
      setUser(userData);
    }
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
