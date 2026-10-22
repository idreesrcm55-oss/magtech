import { useCallback, useState } from "react";
import { Send } from "lucide-react";
import Button from "../ui/Button";
import FormField from "../ui/FormField";
import Toast from "../ui/Toast";
import { SITE } from "../../config/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d\s().-]{7,}$/;

const emptyValues = (fields) => Object.fromEntries(fields.map((f) => [f.name, ""]));

function validate(fields, values) {
  const errors = {};
  fields.forEach((f) => {
    const v = values[f.name].trim();
    if (f.required && !v) errors[f.name] = `${f.label} is required.`;
    else if (v && f.type === "email" && !EMAIL_RE.test(v)) errors[f.name] = "Please enter a valid email address.";
    else if (v && f.type === "tel" && !PHONE_RE.test(v)) errors[f.name] = "Please enter a valid phone number.";
  });
  return errors;
}

/** Builds a mailto: link containing the submitted details (static-site fallback). */
function buildMailto(form, fields, values) {
  const body = fields.map((f) => `${f.label}: ${values[f.name] || "-"}`).join("\n");
  return `${SITE.emailHref}?subject=${encodeURIComponent(form.mailSubject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Data-driven form (see data/forms.js). No backend: on valid submit it shows
 * a success toast with a link to send the same details by email.
 */
export default function ContactForm({ form }) {
  const [values, setValues] = useState(() => emptyValues(form.fields));
  const [errors, setErrors] = useState({});
  const [mailto, setMailto] = useState(null);
  const closeToast = useCallback(() => setMailto(null), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form.fields, values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`field-${firstError}`)?.focus();
      return;
    }
    setMailto(buildMailto(form, form.fields, values));
    setValues(emptyValues(form.fields));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl bg-white p-6 shadow-xl shadow-dark/5 ring-1 ring-dark/5 md:p-10"
      >
        <h2 className="text-2xl font-bold">{form.title}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {form.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              value={values[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
        </div>
        <Button type="submit" icon={Send} size="lg" className="mt-8 w-full sm:w-auto">
          {form.submitLabel}
        </Button>
      </form>

      <Toast message={mailto ? form.successMessage : null} onClose={closeToast}>
        <a href={mailto ?? undefined} className="mt-2 inline-block font-semibold text-primary hover:text-secondary">
          Prefer email? Send these details to {SITE.email}
        </a>
      </Toast>
    </>
  );
}
