import '../../css/guest-layout.css';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div id="guest-main-container">
      <div id="guest-logo-container">
        <Link href="/">
          <img src="campus-connect.svg" alt="app-logo" id="guest-logo-img" />
        </Link>
        <span id="guest-logo-text">Campus Connect</span>
      </div>

      <div id="guest-children-main-container">{children}</div>
    </div>
  );
}
