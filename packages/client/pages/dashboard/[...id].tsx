import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { GuildImage } from '../../components/Guild';
import Loading from '../../components/Loading';
import { fetch } from '../../lib/axios';
import { API_URL } from '../../utils/constants';

const GuildDashBoard = () => {
  const router = useRouter();
  const [guild, setGuild] = useState<any>(null);
  const { id } = router.query;

  useEffect(() => {
    async function fetchGuildData() {
      const response = await fetch(`${API_URL}/guild/${id}`);
      setGuild(response.data);
    }
    fetchGuildData();
  }, [id]);

  if (guild === null) return <Loading />;

  return (
    <div className="flex flex-col items-center px-2 py-2">
      <div className="flex items-center justify-center gap-x-2">
        <GuildImage
          guildId={guild.id}
          iconHash={guild.icon}
          name={guild.name}
        />
        <span className="font-quicksand text-3xl uppercase">{guild.name}</span>
      </div>
    </div>
  );
};

export default GuildDashBoard;
