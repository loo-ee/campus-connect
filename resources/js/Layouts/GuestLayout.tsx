import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div className="flex flex-row items-center gap-x-3">
        <Link href="/">
          {/* <ApplicationLogo className="w-20 h-20 fill-current text-slate-800" /> */}
          <img src="campus-connect.svg" alt="app-logo" className="w-20 h-20" />
        </Link>
        <span className="text-4xl font-bold font-inter">Campus Connect</span>
      </div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-sm">
        {children}
      </div>
    </div>
  );
}
