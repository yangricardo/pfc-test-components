import {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

export type ICheckboxOption = {
  value: string | number | readonly string[] | undefined;
  label: string;
};

export const CheckboxInput = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
}: {
  label?: string;
  name: Path<TFieldValues>;
  options: ICheckboxOption[];
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { register } = useFormContext();
  return (
    <div className={`w-full flex flex-col`}>
      {label && <label htmlFor={name}>{label}</label>}
      {options.map((option) => (
        <div key={`${name}-${option.value}`} className="inline-flex space-x-1">
          <input
            type="checkbox"
            {...register(name)}
            name={name}
            value={option.value}
            className="form-checkbox rounded text-green-500"
          />
          <label htmlFor={name}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
