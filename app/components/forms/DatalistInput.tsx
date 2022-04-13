import type { ErrorMessageProps } from "./ErrorMessage";
import { ErrorMessage } from "./ErrorMessage";

export function DataListInput({
  options,
  label,
  isSubmitting,
  error,
  ...props
}: {
  options: { name: string; value: string }[];
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  ErrorMessageProps) {
  return (
    <div className="form-control">
      <label htmlFor={props.id} className="label label-text">
        {label}
      </label>
      <input type="text" className="input input-bordered" {...props} />

      <datalist id={props.list}>
        {options.map((data) => {
          return (
            <option key={data.name} value={data.value}>
              {data.name}
            </option>
          );
        })}
      </datalist>
      <ErrorMessage isSubmitting={isSubmitting} error={error} />
    </div>
  );
}
