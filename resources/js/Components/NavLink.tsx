import { Link, InertiaLinkProps } from '@inertiajs/react';

export default function NavLink({
  active = false,
  className = '',
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  return (
    <Link
      {...props}
      className={
        'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
        (active
          ? 'border-primary-10 text-slate-12 focus:border-indigo-700 '
          : 'border-transparent text-slate-9 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
        className
      }
    >
      {children}
    </Link>
  );
}
