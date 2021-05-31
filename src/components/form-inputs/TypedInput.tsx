import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import {
  FieldError,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

export const TypedInput = <TFieldValues extends FieldValues>({
  label,
  type,
  name,
  options,
  placeholder,
}: {
  label?: string;
  placeholder?: string;
  type?:
    | 'number'
    | 'tel'
    | 'email'
    | 'url'
    | 'search'
    | 'password'
    | 'text'
    | 'textarea';
  name: Path<TFieldValues>;
  options?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { register, formState, trigger, watch } = useFormContext();
  const error = formState.errors[name] as FieldError | undefined;
  const className = `${
    type !== 'textarea' ? 'form-input' : 'form-textarea'
  } p-2 border-none ring-1 ring-gray-400 hover:ring-green-500 focus:ring-green-500 active:ring-green-500 hover:ring-2 focus:ring-2 active:ring-2 rounded outline-none transition duration-300`;
  const onBlur = async () => await trigger(name);

  const PasswordStrengthBar = useCallback(() => {
    if (type === 'password') {
      const PasswordStrengthBar = dynamic(
        () => import('react-password-strength-bar'),
        { ssr: false },
      );
      return <PasswordStrengthBar password={watch(name)} />;
    }
    return <></>;
  }, [type, name, watch]);

  return (
    <div className="w-full flex flex-col space-y-2 border-none transi">
      {label && <label htmlFor={name}>{label}</label>}
      {type !== 'textarea' ? (
        <>
          <input
            {...register(name, options)}
            name={name}
            placeholder={placeholder}
            type={type}
            onBlur={onBlur}
            className={className}
          />
          <PasswordStrengthBar />
        </>
      ) : (
        <textarea
          {...register(name, options)}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          className={className}
        />
      )}

      {error && <span>{error?.message}</span>}
    </div>
  );
};

export default TypedInput;
