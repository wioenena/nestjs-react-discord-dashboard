import Link from 'next/link';

export type Props = {
  isLoggedIn: boolean;
};

const Navbar = ({ isLoggedIn }: Props) => {
  return (
    <div className="flex justify-end px-4 py-2 bg-[#222222] text-white font-semibold text-xl font-quicksand">
      <Link
        href={`${process.env.NEXT_PUBLIC_API_URL}/auth/${
          isLoggedIn ? 'logout' : 'login'
        }`}
        className="px-2 py-1 rounded-md border-2 border-emerald-700 hover:text-emerald-300 hover:bg-emerald-900 transition-colors duration-100"
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </Link>
    </div>
  );
};

export default Navbar;
