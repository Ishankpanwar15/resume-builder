import { useEffect, useState } from 'react';
import { supabase } from '../../../../lib/supabaseClient';
import { User } from 'next-auth';

export const useUser = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user || null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return user;
};
