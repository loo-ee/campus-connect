import '../../css/authenticated-layout.css';
import { PropsWithChildren, ReactNode } from 'react';
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
import { Input } from '@/components/ui';
import { BellIcon, MessageSquare, Search } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const routePaths = ['dashboard'];

export default function Authenticated({
  user,
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
    <TooltipProvider>
      <div id="auth-main-container">
        <nav id="auth-nav-container">
          <div id="auth-sub-nav-container">
            <div id="auth-logo-main-container">
              <Link href={route('landing_page')}>
                <div id="auth-logo-sub-container">
                  <img
                    src="campus-connect.svg"
                    id="auth-logo-img"
                    alt="app-logo"
                  />
                  <span id="auth-logo-text">Campus Connect</span>
                </div>
              </Link>
            </div>

            <div id="auth-actions-main-container">
              <div id="auth-search-main-container">
                <Search id="auth-search-icon" />
                <Input
                  type="search"
                  placeholder="Search..."
                  id="auth-search-input"
                />
              </div>
              <div id="auth-actions-icons-container">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <BellIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Notifications</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <MessageSquare />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>Inbox</span>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="auth-actions-dropdown-container">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <img
                      src="account.png"
                      id="auth-actions-dropdown-trigger"
                      alt="account pfp"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent id="auth-actions-dropdown-content">
                    <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
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
        </nav>

        <div className="flex flex-row mt-20 pl-8">
          <section className="flex flex-col w-[420px] h-screen items-start bg-white boder-gray-300">
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
            <ScrollArea className="h-screen w-full pb-24">
              {children}
            </ScrollArea>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
