import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link, router } from '@inertiajs/react';
import { User } from '@/types';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-12">
            <div className="flex items-center">
              <Link href={route('home')}>
                <div className="self-center w-8 flex">
                  <ApplicationLogo />
                </div>
              </Link>
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <NavLink
                  href={route('dashboard')}
                  active={route().current('dashboard')}
                >
                  Dashboard
                </NavLink>
                <NavLink
                  href={route('profile.edit')}
                  active={route().current('profile.edit')}
                >
                  Profile
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ms-6">
              <div className="ms-3 relative">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <div className="flex flex-row items-baseline gap-x-2">
                      <span className="">{user.name}</span>
                      <CaretDownIcon />
                    </div>
                  </DropdownMenu.Trigger>

                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="min-w-[150px] bg-white rounded-sm p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                      sideOffset={5}
                    >
                      <DropdownMenu.Item
                        onSelect={() => router.get('profile')}
                        className="hover:bg-primary-11 hover:text-textLight group text-[13px] leading-none text-violet11 rounded-sm flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                      >
                        Profile
                      </DropdownMenu.Item>
                      <DropdownMenu.Item
                        onSelect={() => router.post('logout')}
                        className="hover:bg-primary-11 hover:text-textLight group text-[13px] leading-none text-violet11 rounded-sm flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                      >
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
