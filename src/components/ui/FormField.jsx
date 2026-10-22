/** Renders one form control from a field definition in data/forms.js. */
export default function FormField({ field, value, error, onChange }) {
  const id = `field-${field.name}`;
  const errorId = `${id}-error`;
  const common = {
    id,
    name: field.name,
    value,
    onChange,
    required: field.required,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
    className: `form-input ${error ? "border-danger focus:border-danger focus:ring-danger/20" : ""}`,
  };

  let control;
  if (field.type === "textarea") {
    control = <textarea rows={5} {...common} />;
  } else if (field.type === "select") {
    control = (
      <select {...common}>
        <option value="">Select {field.label.toLowerCase()}</option>
        {field.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    );
  } else {
    control = <input type={field.type} min={field.min} {...common} />;
  }

  return (
    <div className={field.half ? "sm:col-span-1" : "sm:col-span-2"}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-dark">
        {field.label}
        {field.required && (
          <span className="text-primary" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {control}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
