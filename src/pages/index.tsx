import { NextPage } from 'next';
import {
  DeepMap,
  FieldError,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormEvent, FormEventHandler, useEffect } from 'react';

type FormProps = {
  example: string;
};

const formPropsSchema = Yup.object().shape({
  example: Yup.string().required(),
});

const TextInput = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  options,
  errors,
}: {
  label?: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  options?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  errors: DeepMap<TFieldValues, FieldError>;
}): any => {
  const error = errors[name] as FieldError | undefined;
  return (
    <div className="w-full flex flex-col space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...register(name, options)}
        name={name}
        type="text"
        className={`p-2 ring-2 ring-gray-400 focus:ring-green-500 active:ring-green-500 rounded outline-none focus:outline-none active:outline-none hover:outline-none`}
      />
      {error && <span>{error?.message}</span>}
    </div>
  );
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(formPropsSchema),
    defaultValues: { example: 'default value' },
  });
  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  const watchFields = watch();

  useEffect(() => console.log(watchFields), [watchFields]);

  return (
    <form
      className={`flex flex-col w-full space-y-2 p-2`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput<FormProps>
        name={'example'}
        register={register}
        // options={{
        //   required: {
        //     value: true,
        //     message: 'This Field is Required',
        //   },
        // }}
        errors={errors}
      />
      <input type="submit" />
    </form>
  );
};

export default Home;
