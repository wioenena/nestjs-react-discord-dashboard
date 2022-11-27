import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { User } from 'types';

import { PickProp } from '../utils/types';
import { getGuildImage } from '../utils/utils';

type Props = {
  guild: PickProp<User, 'guilds'> extends (infer T)[] | undefined ? T : never;
};

const Guild = ({ guild }: Props) => {
  return (
    <div>
      <div className="flex justify-between items-center rounded px-4 py-2 border-2 border-emerald-700 hover:bg-emerald-700 duration-150">
        <div className="flex justify-start items-center gap-x-2">
          <GuildImage
            guildId={guild.id}
            iconHash={guild.icon}
            name={guild.name}
          />
          <span>
            {guild.name.slice(0, 10) + (guild.name.length > 10 ? '...' : '')}
          </span>
        </div>
        <div>
          <Link href={`/dashboard/${guild.id}`}>
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guild;

type GuildImageProps = {
  guildId: string;
  iconHash: string | null;
  name: string;
};

export const GuildImage = ({ guildId, iconHash, name }: GuildImageProps) => {
  const imgUrl = iconHash === null ? null : getGuildImage(guildId, iconHash);
  return (
    <div className="w-12 h-12 select-none flex justify-center items-center text-xl bg-[#393E46] hover:scale-110 transition-transform duration-150 rounded-full">
      {imgUrl === null ? (
        <span>{name.at(0)?.toUpperCase()}</span>
      ) : (
        <Link href={imgUrl} target="_blank">
          <Image
            src={imgUrl}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
            loading="lazy"
          />
        </Link>
      )}
    </div>
  );
};
