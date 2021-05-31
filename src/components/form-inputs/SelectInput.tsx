import {
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

export type ISelectOption = {
  value: string | number | readonly string[] | undefined;
  label: string;
};

export const SelectInput = <TFieldValues extends FieldValues>({
  label,
  name,
  options,
  multiple,
}: {
  label?: string;
  name: Path<TFieldValues>;
  options: ISelectOption[];
  multiple?: boolean | false;
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { register } = useFormContext();
  return (
    <div className={`w-full flex flex-col`}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        {...register(name)}
        name={name}
        className={`${
          multiple === false ? 'form-select' : 'form-multiselect'
        } rounded`}
        multiple={multiple}
      >
        {options.map((option) => (
          <option key={`${name}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
