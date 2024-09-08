import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';

export default function Welcome({}: PageProps<{
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

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="flex flex-row items-baseline">
                <span className="">More</span>
                <CaretDownIcon />
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
              >
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  New Tab{' '}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+T
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
                  New Window{' '}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⌘+N
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item
                  className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                  disabled
                >
                  New Private Window{' '}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                    ⇧+⌘+N
                  </div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>

        <div className="flex flex-row w-40 justify-between">
          <Link href={route('login')}>
            <span className="hover:underline px-3 py-2">Log in</span>
          </Link>
          <Link href={route('register')}>
            <span className="bg-primary-9 hover:bg-primary-11 text-textLight px-3 py-2 rounded-sm">
              Join Now
            </span>
          </Link>
        </div>
      </header>

      <main className="flex flex-col">
        <div className="flex flex-row items-center justify-around mt-10">
          <div className="flex flex-col w-[500px] gap-y-4">
            <span className="text-[50px] leading-tight font-inter font-bold">
              Empower Your Organization with Campus Connect
            </span>
            <span>
              Streamline auditing, finance, announcements, and collaboration for
              your school organizations with our all-in-one CMS platform.
            </span>
            <div className="flex flex-row gap-x-2 items-center">
              <span className="bg-primary-9 hover:bg-primary-11 text-textLight px-3 py-2 rounded-sm">
                Learn More
              </span>
              <span className="underline-offset-4 hover:underline px-3 py-2 rounded-sm">
                Sign Up
              </span>
            </div>
          </div>
          <img
            src="organization-illustration.svg"
            className="w-[450px] h-[450px] rounded-sm"
            alt=""
          />
        </div>
      </main>
    </>
  );
}
