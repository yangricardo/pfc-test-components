import {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

export const DateTimeInput = <TFieldValues extends FieldValues>({
  label,
  name,
  type,
}: {
  label?: string;
  name: Path<TFieldValues>;
  type: 'datetime-local' | 'week' | 'month' | 'time';
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { register } = useFormContext();
  return (
    <div className={`w-full flex flex-col`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        {...register(name)}
        name={name}
        className="form-input rounded "
      />
    </div>
  );
};
