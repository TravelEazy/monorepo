import React from "react";

export interface ErrorMessageProps {
  error?: string;
  isSubmitting: boolean;
}

export function ErrorMessage({ error, isSubmitting }: ErrorMessageProps) {
  const [show, setShow] = React.useState(!!error);

  React.useEffect(() => {
    const id = setTimeout(() => {
      const hasError = !!error;
      setShow(hasError && !isSubmitting);
    });
    return () => clearTimeout(id);
  }, [error, isSubmitting]);

  return (
    <div
      className={"label label-text"}
      style={{
        opacity: show ? 1 : 0,
        height: show ? "2em" : 0,
        color: "red",
        transition: "all 300ms ease-in-out",
      }}
    >
      {error}
    </div>
  );
}
