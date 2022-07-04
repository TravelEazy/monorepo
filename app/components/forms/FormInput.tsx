import type { ErrorMessageProps } from "./ErrorMessage";
import { ErrorMessage } from "./ErrorMessage";

export function FormInput({
  label,
  isSubmitting,
  error,
  ...props
}: {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  ErrorMessageProps) {
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={props.id} className="label label-text">
          {label}
        </label>
      )}
      <input className="input input-bordered" {...props} />
      <ErrorMessage isSubmitting={isSubmitting} error={error} />
    </div>
  );
}
