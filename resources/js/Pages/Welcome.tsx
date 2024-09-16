import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import ApplicationLogo from '@/components/custom/ApplicationLogo';
import { CaretDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Welcome({
  auth,
}: PageProps<{
  laravelVersion: string;
  phpVersion: string;
}>) {
  return (
    <>
      <Head title="Welcome" />
      <header className="flex text-sm flex-row items-center justify-between h-16 mt-3 pt-0 pb-2 px-10">
        <div className="flex w-40 h-10">
          <ApplicationLogo />
        </div>

        <div className="flex flex-row justify-around gap-x-10">
          <Link href={route('dashboard')}>
            <span className="">About Us</span>
          </Link>
          <Link href={route('dashboard')}>
            <span className="">Services</span>
          </Link>
          <Link href={route('dashboard')}>
            <span className="">Events</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex flex-row items-baseline gap-x-2">
                <span>More</span>
                <CaretDownIcon />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <span>Test</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Hello</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {auth.user ? (
          <Link href={route('dashboard')}>
            <span className="bg-primary-1 hover:bg-primary-2 text-textLight px-3 py-2 rounded-sm">
              Dashboard
            </span>
          </Link>
        ) : (
          <div className="flex flex-row w-40 justify-between">
            <Link href={route('login')}>
              <span className="hover:underline px-3 py-2">Log in</span>
            </Link>
            <Link href={route('register')}>
              <span className="bg-primary-1 hover:bg-primary-2 text-textLight px-3 py-2 rounded-sm">
                Join Now
              </span>
            </Link>
          </div>
        )}
      </header>

      <main className="flex flex-col">
        <div className="flex flex-row items-center justify-evenly mt-10">
          <div className="flex flex-col w-[500px] gap-y-4">
            <span className="text-[50px] leading-tight font-inter font-bold">
              Empower Your Organization with Campus Connect
            </span>
            <span>
              Streamline auditing, finance, announcements, and collaboration for
              your school organizations with our all-in-one CMS platform.
            </span>
            <div className="flex flex-row gap-x-2 items-center">
              <span className="bg-primary-1 hover:bg-primary-2 text-textLight px-3 py-2 rounded-sm">
                Learn More
              </span>

              {!auth.user && (
                <Link href={route('register')}>
                  <span className="underline-offset-4 hover:underline px-3 py-2 rounded-sm">
                    Sign Up
                  </span>
                </Link>
              )}
            </div>
          </div>
          <img
            src="organization-illustration.svg"
            className="w-[450px] h-[450px] rounded-sm"
            alt=""
          />
        </div>

        <div className="flex flex-row justify-evenly mt-32">
          <span className="w-[500px] text-3xl font-inter font-bold text-slate-900">
            Streamline your organization's operations with our powerful
            collaboration tools
          </span>
          <span className="w-[500px] text-lg text-justify">
            Campus Connect provides a comprehensive set of features to help
            school organizations manage their members, finances, and
            announcements. With our intuitive platform, you can easily
            collaborate with your team, streamline your processes, and stay
            organized.
          </span>
        </div>

        <div className="flex flex-row justify-evenly mt-32">
          <div className="flex flex-col w-[300px]">
            <img
              src="human-resources.png"
              className="w-10"
              alt="member management"
            />
            <span className="font-inter font-bold text-xl mt-5 mb-3">
              Efficient Member Management
            </span>
            <span className="mb-6">
              Empower your officers with the tools they need to lead and manage
              your organization.
            </span>
            <Link href={route('dashboard')}>
              <div className="flex flex-row items-center gap-x-2">
                <span className="font-medium hover:text-slate-950">
                  Learn More
                </span>
                <ChevronRightIcon />
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-[300px]">
            <img src="profile.png" className="w-10" alt="member management" />
            <span className="font-inter font-bold text-xl mt-5 mb-3">
              Effective Officer Management
            </span>
            <span className="mb-6">
              Empower your officers with the tools they need to lead and manage
              your organization.
            </span>
            <Link href={route('dashboard')}>
              <div className="flex flex-row items-center gap-x-2">
                <span className="font-medium hover:text-slate-950">
                  Learn More
                </span>
                <ChevronRightIcon />
              </div>
            </Link>
          </div>

          <div className="flex flex-col w-[300px]">
            <img src="pattern.png" className="w-10" alt="member management" />
            <span className="font-inter font-bold text-xl mt-5 mb-3">
              Seamless Collaboration
            </span>
            <span className="mb-6">
              Collaborate with your team in real-time, share files, and stay
              connected wherever you are.
            </span>
            <Link href={route('dashboard')}>
              <div className="flex flex-row items-center gap-x-2">
                <span className="font-medium hover:text-slate-950">
                  Learn More
                </span>
                <ChevronRightIcon />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
