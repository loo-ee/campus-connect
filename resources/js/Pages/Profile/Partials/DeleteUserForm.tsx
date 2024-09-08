import { useRef, useState, FormEventHandler } from 'react';
import DangerButton from '@/components/DangerButton';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import Modal from '@/components/Modal';
import SecondaryButton from '@/components/SecondaryButton';
import TextInput from '@/components/TextInput';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DeleteUserForm({
  className = '',
}: {
  className?: string;
}) {
  const passwordInput = useRef<HTMLInputElement>(null);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: '',
  });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy(route('profile.destroy'), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-slate-900">Delete Account</h2>

        <p className="mt-1 text-sm text-slate-700">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete </DialogTitle>
            <DialogDescription className="text-justify text-sm">
              Once your account is deleted, all of its resources and data will
              be permanently deleted. Before deleting your account, please
              download any data or information that you wish to retain.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                ref={passwordInput}
                value={data.password}
                onChange={(e) => setData('password', e.target.value)}
                className="col-span-3"
              />

              <InputError message={errors.password} className="mt-2" />
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={deleteUser}
              variant="destructive"
              disabled={processing}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
