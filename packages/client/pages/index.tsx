import { useContext, useEffect } from 'react';
import Guild from '../components/Guild';
import Loading from '../components/Loading';
import { UserContext } from '../contexts/UserContext';
import { useFetch } from '../hooks/useFetch';
import { API_URL } from '../utils/constants';

export default function Home() {
  const { user, setUser } = useContext(UserContext);
  const { response, isLoading } = useFetch(`${API_URL}/users/me`);

  useEffect(() => {
    if (response) {
      setUser(response.data);
    }
  }, [response, setUser]);

  if (user?.guilds) {
    user.guilds = user.guilds.filter(
      (guild) => (guild.permissions & 0x8) === 0x8
    );
  }

  if (isLoading) {
    return <Loading width={280} height={280} />;
  }

  return (
    <div className="h-full px-4 py-2 text-white flex justify-center items-center">
      {user && (
        <div className="max-h-96 h-full overflow-y-auto overflow-x-hidden container mx-auto grid grid-cols-3 gap-x-2 gap-y-5 custom-scroll px-2">
          {user.guilds?.map((guild) => (
            <Guild guild={guild} key={guild.id} />
          ))}
        </div>
      )}
      {user === null && <span className="text-xl">Please login.</span>}
    </div>
  );
}
