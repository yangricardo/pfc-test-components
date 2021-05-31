import {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

export type IRadioOption = {
  value: string | number | readonly string[] | undefined;
  label: string;
};

export const RadioInput = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
}: {
  label?: string;
  name: Path<TFieldValues>;
  options: IRadioOption[];
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { register } = useFormContext();
  return (
    <div className={`w-full flex flex-col`}>
      {label && <label htmlFor={name}>{label}</label>}
      {options.map((option) => (
        <div key={`${name}-${option.value}`} className="inline-flex space-x-1">
          <input
            type="radio"
            {...register(name)}
            name={name}
            value={option.value}
            className="form-Radio rounded text-green-500"
          />
          <label htmlFor={name}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};
