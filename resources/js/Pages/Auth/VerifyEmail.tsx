import { Button } from '@/components/ui';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
  const { post, processing } = useForm({});

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="Email Verification" />

      <div className="mb-4 text-sm text-slate-10">
        Thanks for signing up! Before getting started, could you verify your
        email address by clicking on the link we just emailed to you? If you
        didn't receive the email, we will gladly send you another.
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 font-medium text-sm text-accent-ok">
          A new verification link has been sent to the email address you
          provided during registration.
        </div>
      )}

      <form onSubmit={submit}>
        <div className="mt-4 flex items-center justify-between">
          <Button disabled={processing}>Resend Verification Email</Button>

          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="underline text-sm text-slate-10 hover:text-slate-12 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-9"
          >
            Log Out
          </Link>
        </div>
      </form>
    </GuestLayout>
  );
}
