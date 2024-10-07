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
import { useState } from 'react';

export default function Welcome({
  auth,
}: PageProps<{
  laravelVersion: string;
  phpVersion: string;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="page-container">
      <Head title="Welcome" />

      <header className="w-screen tablet:hidden bg-white p-5 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex flex-row w-56 gap-x-3 items-center">
            <div className="flex w-10 h-10">
              <img src="campus-connect.svg" alt="app-logo" />
            </div>
            <span className="font-bold text-[20px] font-inter">
              Campus Connect
            </span>
          </div>
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-primary-1 border-primary-0 hover:text-primary-2 hover:border-primary-1 focus:outline-none"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`items-center w-full ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col w-full items-center mt-5 md:mt-0">
            <li className="mb-4 md:mb-0 md:ml-6">
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li className="mb-4">
              <a href="/about" className="text-gray-800 hover:text-blue-500">
                About
              </a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-6">
              <a href="/services" className="text-gray-800 hover:text-blue-500">
                Services
              </a>
            </li>
            <li className="mb-4 md:mb-0 md:ml-6">
              <a href="/contact" className="text-gray-800 hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>

      <header className="phone:hidden tablet:flex text-sm flex-row items-center justify-between h-16 mt-3 pt-0 pb-2 px-10">
        <div className="flex flex-row w-56 gap-x-3 items-center">
          <div className="flex w-10 h-10">
            <img src="campus-connect.svg" alt="app-logo" />
          </div>
          <span className="font-bold text-[20px] font-inter">
            Campus Connect
          </span>
        </div>

        <div className="flex flex-row justify-around gap-x-10">
          <a href="#about">
            <span>About</span>
          </a>
          <a href="#services">
            <span>Services</span>
          </a>
          <Link href={route('dashboard')}>
            <span className="">Dashboard</span>
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
        <div className="flex phone:flex-col laptop:flex-row items-center justify-around mt-10">
          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] gap-y-4">
            <span className="phone:text-[30px] tablet:text-[50px] leading-tight font-inter font-bold">
              Empower Your Organization with Campus Connect
            </span>
            <span className="phone:text-sm tablet:text-base">
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
            id="about"
            src="organization-illustration.svg"
            className="phone:mt-5 tablet:mt-0 phone:w-[350px] phone:h-[350px] tablet:w-[450px] tablet:h-[450px] rounded-sm"
            alt=""
          />
        </div>

        <div className="flex phone:self-center laptop:self-auto phone:flex-col laptop:flex-row phone:justify-center laptop:justify-evenly phone:mt-20 laptop:mt-32">
          <span className="phone:w-[300px] tablet:w-[500px] text-3xl font-inter font-bold text-slate-900">
            Streamline your organization's operations with our powerful
            collaboration tools
          </span>
          <span className="phone:w-[300px] tablet:w-[500px] phone:mt-5 laptop:mt-0 text-lg text-justify">
            Campus Connect provides a comprehensive set of features to help
            school organizations manage their members, finances, and
            announcements. With our intuitive platform, you can easily
            collaborate with your team, streamline your processes, and stay
            organized.
          </span>
        </div>

        <div className="flex phone:flex-col laptop:flex-row justify-evenly phone:mt-20 laptop:mt-32 overflow-scroll phone:self-center laptop:self-auto phone:gap-y-16 laptop:gap-y-0">
          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] phone:self-center laptop:self-auto laptop:w-[300px]">
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

          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] phone:self-center laptop:self-auto laptop:w-[300px]">
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

          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] phone:self-center laptop:self-auto laptop:w-[300px]">
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

        <div
          id="services"
          className="flex phone:flex-col laptop:flex-row justify-evenly phone:mt-20 laptop:mt-44 phone:self-center laptop:self-auto"
        >
          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px] phone:self-center laptop:self-auto">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Efficiently Manage School Organization Auditing
            </span>
          </div>

          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px] phone:mt-3 laptop:mt-0">
            <span>
              Campus Connect provides a comprehensive system for school
              organizations to streamline their auditing processes, ensuring
              accuracy and transparency.
            </span>
            <div className="flex phone:flex-col laptop:flex-row mt-10 justify-between phone:gap-y-5 laptop:gap-y-0">
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
          className="phone:w-1/3 tablet:w-3/4 laptop:w-11/12 desktop:max-w-[1500px] rounded-2xl self-center mt-24"
        />

        <div className="flex phone:flex-col laptop:flex-row justify-evenly items-center phone:mt-20 laptop:mt-44">
          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px] z-10">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Efficiently Manage Your Organization's Finances
            </span>
            <span className="mt-5">
              With Campus Connect, you can easily track and manage your
              organization's finances, making auditing and budgeting a breeze.
            </span>
            <div className="flex phone:flex-col laptop:flex-row mt-10 justify-between">
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

          <div className="flex flex-col phone:w-[350px] laptop:w-[500px] desktop:w-[600px] phone:mt-20 laptop:mt-0">
            <img src="i2.png" alt="" className="scale-150" />
          </div>
        </div>

        <section className="flex phone:flex-col laptop:flex-row justify-evenly items-center phone:mt-20 laptop:mt-44">
          <div className="phone:hidden laptop:flex flex-col laptop:w-[500px] desktop:w-[600px]">
            <img src="i4.png" alt="" className="scale-150" />
          </div>

          <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px] z-10">
            <span>Simplify</span>
            <span className="font-bold text-[35px] font-inter">
              Stay Informed with the Latest Announcements from Campus Connect
            </span>
            <span className="mt-5">
              Get updates on important events, deadlines, and news directly from
              your school organizations.
            </span>
            <div className="flex phone:flex-col laptop:flex-row mt-10 justify-between">
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

        <div className="flex flex-col justify-evenly mt-36 phone:self-center laptop:self-auto">
          <div className="flex flex-col phone:ml-0 laptop:ml-24 phone:self-center laptop:self-auto phone:w-[300px] tablet:w-[500px]">
            <span id="welcome-reviews-title">Satisfied Customers</span>
            <span id="welcome-reviews-subtitle">
              Hear what our users have to say about Campus Connect
            </span>
          </div>

          <div className="flex phone:flex-col laptop:flex-row justify-evenly w-full items-center mt-14 phone:gap-y-10 laptop:gap-y-0">
            <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px]">
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
                <div className="border-x border-solid border-slate-400 phone:hidden tablet:block"></div>
                <img
                  src="webflow.png"
                  alt=""
                  className="scale-50 -ml-10 phone:hidden tablet:block"
                />
              </div>
            </div>

            <div className="flex flex-col phone:w-[300px] tablet:w-[500px] desktop:w-[600px] z-10">
              <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              <span className="font-bold mt-5">
                Using Campus Connect has been a game-changer for our
                organization. It has made communication and coordination much
                easier, saving us time and effort.
              </span>

              <div className="flex flex-row mt-5 gap-x-3">
                <img src="elliot.jpg" alt="" className="w-10 rounded-full" />
                <div className="flex flex-col justify-center text-xs">
                  <span className="font-semibold">Elliot Alderson</span>
                  <span>CTO, FScociety</span>
                </div>
                <div className="border-x border-solid border-slate-400 phone:hidden tablet:block"></div>
                <img
                  src="webflow.png"
                  alt=""
                  className="scale-50 -ml-10 phone:hidden tablet:block"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-evenly items-center w-full phone:mt-20 laptop:mt-44">
          <span>Connect</span>
          <span className="font-bold text-[36px] font-inter">Get in Touch</span>
          <span className="mt-333">
            Have a question? Need assistance? Contact us today.
          </span>

          <div className="flex phone:flex-col laptop:flex-row justify-evenly mt-16 phone:gap-y-10 laptop:gap-y-0">
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
              <span className="underline phone:hidden tablet:block">
                Privacy Policy
              </span>
              <span className="underline phone:hidden tablet:block">
                Terms of Service
              </span>
              <span className="underline phone:hidden tablet:block">
                Cookies Settings
              </span>
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
