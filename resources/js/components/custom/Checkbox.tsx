import { InputHTMLAttributes } from 'react';

export default function Checkbox({
  className = '',
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={
        'rounded border-slate-5 text-primary-1 shadow-sm focus:ring-primary-1 ' +
        className
      }
    />
  );
}
