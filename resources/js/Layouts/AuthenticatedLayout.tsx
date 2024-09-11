import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/components/custom/ApplicationLogo';
import { Link, router } from '@inertiajs/react';
import { User } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Config } from '../../../vendor/tightenco/ziggy/src/js';
import { ScrollArea } from '@/components/ui/scroll-area';

const routePaths = ['dashboard', 'profile'];

export default function Authenticated({
  children,
  ziggy,
}: PropsWithChildren<{
  user: User;
  ziggy?: Config & {
    location: string;
  };
  header?: ReactNode;
}>) {
  return (
    <div className="h-screen">
      <nav className="bg-white border-gray-300 fixed top-0 w-screen">
        <div className="w-screen px-8">
          <div className="flex justify-between h-14 z-10">
            <div className="flex items-center">
              <Link href={route('landing_page')}>
                <div className="self-center items-center gap-x-2 w-48 flex flex-row">
                  <div className="w-8">
                    <ApplicationLogo />
                  </div>
                  <span className="font-bold font-inter">Campus Connect</span>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ms-6">
              <div className="ms-3 relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <img src="account.png" className="w-8 h-8" alt="" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[150px]">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem onSelect={() => router.get('profile')}>
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => router.post('logout')}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-row mt-16">
        <section className="flex flex-col w-[420px] h-screen items-start ml-5 bg-white boder-gray-300">
          <div className="flex flex-col px-5 py-3 w-full border border-gray-300 rounded-sm">
            <div className="flex flex-row gap-x-2 rounded-sm items-center">
              <img
                src="idealist-guild.png"
                className="w-10 h-10 rounded-full"
                alt=""
              />
              <span>The Idealists' Guild</span>
            </div>

            <div className="flex flex-col w-full mt-5 text-sm">
              {routePaths.map((r) => (
                <div
                  key={r}
                  className={`bg-whtie w-full rounded-sm px-3 py-2 ${ziggy?.location.includes(r) ? ' bg-slate-200' : ''}`}
                >
                  <Link href={route(r)}>
                    <div className="flex flex-row gap-x-2 ">
                      <img
                        src={`${r}-${ziggy?.location.includes(r) ? 'filled' : 'outlined'}.svg`}
                        alt=""
                      />
                      <label className="text-slate-900" htmlFor="r1">
                        {r[0].toUpperCase() + r.slice(1)}
                      </label>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <main className="w-full rounded-sm">
          <ScrollArea className="h-screen w-full rounded-md">
            {children}
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
