import '../../css/pages/welcome.css';
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
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
    <div className="page-container">
      <Head title="Welcome" />
      <header className="flex text-sm flex-row items-center justify-between h-16 mt-3 pt-0 pb-2 px-10">
        <div className="flex flex-row w-56 gap-x-3 items-center">
          <div className="flex w-10 h-10">
            <img src="campus-connect.svg" alt="app-logo" />
          </div>
          <span className="font-bold text-[20px] font-inter">
            Campus Connect
          </span>
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

      <main className="flex flex-col laptop:w-full desktop:max-w-[2000px] self-center px-10">
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
          <span className="laptop:w-[500px] desktop:w-[600px] text-3xl font-inter font-bold text-slate-900">
            Streamline your organization's operations with our powerful
            collaboration tools
          </span>
          <span className="laptop:w-[500px] desktop:w-[600px] text-lg text-justify">
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

        <div className="flex flex-row justify-evenly mt-44">
          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px]">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Efficiently Manage School Organization Auditing
            </span>
          </div>

          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px]">
            <span>
              Campus Connect provides a comprehensive system for school
              organizations to streamline their auditing processes, ensuring
              accuracy and transparency.
            </span>
            <div className="flex flex-row mt-10 justify-between">
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img src="charts.png" className="w-6" alt="member management" />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Increase Efficiency
                </span>
                <span className="mb-6 text-justify text-sm">
                  Automate auditing tasks and easily track financial
                  transactions for your school organization.
                </span>
              </div>
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img
                  src="omnichannel.png"
                  className="w-7"
                  alt="member management"
                />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Collaborate Seamlessly
                </span>
                <span className="mb-6 text-justify text-sm">
                  Effortlessly communicate and collaborate with members and
                  officers within your organization.
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              <Link href={route('dashboard')}>
                <span className="bg-primary-1 hover:bg-primary-2 text-textLight px-3 py-2 rounded-sm">
                  Learn More
                </span>
              </Link>

              <Link href={route('register')}>
                <span className="underline-offset-4 hover:underline px-3 py-2 rounded-sm">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>

        <img
          src="i1.png"
          alt=""
          className="laptop:w-11/12 desktop:max-w-[1500px] rounded-2xl self-center mt-24"
        />

        <div className="flex flex-row justify-evenly items-center mt-44">
          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px] z-10">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Efficiently Manage Your Organization's Finances
            </span>
            <span className="mt-5">
              With Campus Connect, you can easily track and manage your
              organization's finances, making auditing and budgeting a breeze.
            </span>
            <div className="flex flex-row mt-10 justify-between">
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img
                  src="cogwheel.png"
                  className="w-6"
                  alt="member management"
                />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Streamline Operations
                </span>
                <span className="mb-6 text-justify text-sm">
                  Automate financial processes and ensure transparency with our
                  intuitive finance management feature.
                </span>
              </div>
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img src="united.png" className="w-7" alt="member management" />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Collaborate Effectively
                </span>
                <span className="mb-6 text-justify text-sm">
                  Communicate and collaborate with your organization's members
                  and officers in one centralized platform.
                </span>
              </div>
            </div>

            <div className="flex flex-row gap-x-2 mt-2">
              <Link href={route('dashboard')}>
                <span className="bg-primary-1 hover:bg-primary-2 text-textLight px-3 py-2 rounded-sm">
                  Learn More
                </span>
              </Link>

              <Link href={route('register')}>
                <span className="underline-offset-4 hover:underline px-3 py-2 rounded-sm">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px]">
            <img src="i2.png" alt="" className="scale-150" />
          </div>
        </div>

        <section className="flex flex-row justify-evenly items-center mt-44">
          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px]">
            <img src="i4.png" alt="" className="scale-150" />
          </div>

          <div className="flex flex-col laptop:w-[500px] desktop:w-[600px] z-10">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Stay Informed with the Latest Announcements from Campus Connect
            </span>
            <span className="mt-5">
              Get updates on important events, deadlines, and news directly from
              your school organizations.
            </span>
            <div className="flex flex-row mt-10 justify-between">
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img
                  src="speech-bubble.png"
                  className="w-6"
                  alt="member management"
                />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Simplify Communication
                </span>
                <span className="mb-6 text-justify text-sm">
                  Easily access and share announcements with your organization
                  members and officers.
                </span>
              </div>
              <div className="flex flex-col laptop:w-[220px] desktop:w-[280px]">
                <img src="link.png" className="w-6" alt="member management" />
                <span className="font-inter font-bold text-lg mt-5 mb-3">
                  Stay Connected
                </span>
                <span className="mb-6 text-justify text-sm">
                  Collaborate and stay engaged with your organization's
                  activities and updates.
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-evenly w-full mt-36">
          <div className="flex flex-col ml-24">
            <span id="welcome-reviews-title">Satisfied Customers</span>
            <span id="welcome-reviews-subtitle">
              Hear what our users have to say about Campus Connect
            </span>
          </div>

          <div className="flex flex-row justify-evenly w-full items-center mt-14">
            <div className="flex flex-col laptop:w-[500px] desktop:w-[600px]">
              <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              <span className="font-bold mt-5">
                Campus Connect has revolutionized the way our organization
                operates. It has streamlined our processes and improved
                collaboration among members.
              </span>

              <div className="flex flex-row mt-5 gap-x-3">
                <img src="jann.jpg" alt="" className="w-10 rounded-full" />
                <div className="flex flex-col justify-center text-xs">
                  <span className="font-semibold">Jann Louie Almirante</span>
                  <span>President, The Idealists' Guild</span>
                </div>
                <div className="border-x border-solid border-slate-400"></div>
                <img src="webflow.png" alt="" className="scale-50 -ml-10" />
              </div>
            </div>

            <div className="flex flex-col laptop:w-[500px] desktop:w-[600px] z-10">
              <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              <span className="font-bold mt-5">
                Using Campus Connect has been a game-changer for our
                organization. It has made communication and coordination much
                easier, saving us time and effort.
              </span>

              <div className="flex flex-row mt-5 gap-x-3">
                <img src="elliot.jpg" alt="" className="w-10 rounded-full" />
                <div className="flex flex-col justify-center text-xs">
                  <span className="font-semibold">Jann Louie Almirante</span>
                  <span>CTO, FScociety</span>
                </div>
                <div className="border-x border-solid border-slate-400"></div>
                <img src="webflow.png" alt="" className="scale-50 -ml-10" />
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-evenly items-center w-full mt-44">
          <span>Connect</span>
          <span className="font-bold text-[36px] font-inter">Get in Touch</span>
          <span className="mt-333">
            Have a question? Need assistance? Contact us today.
          </span>

          <div className="flex flex-row justify-evenly mt-16">
            <div className="flex flex-col w-[350px] items-center">
              <img src="email.png" alt="" className="w-10" />
              <span className="font-bold text-xl mt-5">Email</span>
              <span className="mt-5 text-center">
                Contact us via email and we will respond accordingly.
              </span>
              <span className="underline mt-3">help@campusconnect.com</span>
            </div>

            <div className="flex flex-col w-[350px] items-center">
              <img src="phone.png" alt="" className="w-10" />
              <span className="font-bold text-xl mt-5">Phone</span>
              <span className="mt-5 text-center">
                Contact us via phone and we will respond accordingly.
              </span>
              <span className="underline mt-3">+1 (555) 123-4567</span>
            </div>

            <div className="flex flex-col w-[350px] items-center">
              <img src="location.png" alt="" className="w-10" />
              <span className="font-bold text-xl mt-5">Office</span>
              <span className="mt-5 text-center">
                Visit our office and let a staff guide you.
              </span>
              <span className="underline mt-3">123 Main St, Anytown, USA</span>
            </div>
          </div>
        </section>

        <footer className="flex flex-col pb-3 text-xs justify-between items-center w-full mt-28">
          <div className="h-[1px] w-full bg-slate-950"></div>
          <div className="flex flex-row justify-between mt-5 items-center w-full">
            <div className="flex flex-row gap-x-5">
              <span className="">
                &#169; 2024 Campus Connect. All rights reserved.
              </span>
              <span className="underline">Privacy Policy</span>
              <span className="underline">Terms of Service</span>
              <span className="underline">Cookies Settings</span>
            </div>

            <div className="flex flex-row gap-x-3">
              <img src="facebook.png" alt="" className="w-4" />
              <img src="instagram.png" alt="" className="w-4" />
              <img src="twitter.png" alt="" className="w-4" />
              <img src="linkedin.png" alt="" className="w-4" />
              <img src="youtube.png" alt="" className="w-4" />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
