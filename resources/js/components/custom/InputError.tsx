import { HTMLAttributes } from 'react';

export default function InputError({
  message,
  className = '',
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
  return message ? (
    <p {...props} className={'text-sm text-accent-destructive-1 ' + className}>
      {message}
    </p>
  ) : null;
}
