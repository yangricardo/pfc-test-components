import { NextPage } from 'next';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import {
  TypedInput,
  CheckboxInput,
  RadioInput,
  DateTimeInput,
  SelectInput,
  RichTextInput,
} from '@/components/form-inputs';

type FormProps = {
  TypedInput: string;
  emailInput: string;
  searchInput: string;
  textAreaInput: string;
  passwordInput: string;
  urlInput: string;
  celphoneInput: string;
  numberInput: number;
  checkboxInput: string;
  radioInput: string;
  dateTimeLocalInput: Date;
  dateTimeInput: Date;
  timeInput: Date;
  monthInput: Date;
  weekInput: Date;
  selectInput: string | string[];
  multiSelectInput: string | string[];
  richTextInput: string;
};

const formPropsSchema = Yup.object().shape({
  TypedInput: Yup.string().required(),
  emailInput: Yup.string().required().email(),
  textAreaInput: Yup.string().required().min(10),
  // searchInput: Yup.string().min(1),
  passwordInput: Yup.string()
    .required()
    .matches(/([0-9a-zA-Z\@\!\.\&\$\%\#\*\~\+\=\?]){8,20}/),
  urlInput: Yup.string().url(),
  celphoneInput: Yup.string().required(),
  numberInput: Yup.number().required(),
});

const Home: NextPage = () => {
  const methods = useForm<FormProps>({
    resolver: yupResolver(formPropsSchema),
    defaultValues: { TypedInput: '', textAreaInput: '' },
  });
  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  const watchFields = methods.watch();

  useEffect(() => console.log(watchFields), [watchFields]);

  return (
    <FormProvider {...methods}>
      <form
        className={`flex flex-col w-full space-y-2 p-2`}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <TypedInput<FormProps>
          label={'Text Input'}
          name="TypedInput"
          type="text"
        />
        <TypedInput<FormProps>
          label={'Email Input'}
          name="emailInput"
          type="email"
        />
        <TypedInput<FormProps>
          label={'Search Input'}
          name="searchInput"
          type="search"
        />
        <TypedInput<FormProps>
          label={'Password Input'}
          name="passwordInput"
          type="password"
        />
        <TypedInput<FormProps> label={'URL Input'} name="urlInput" type="url" />
        <TypedInput<FormProps>
          label={'Celphone Input'}
          name="celphoneInput"
          type="tel"
        />
        <TypedInput<FormProps>
          label={'Number Input'}
          name="numberInput"
          type="number"
        />
        <TypedInput<FormProps>
          label={'TextArea Input'}
          name="textAreaInput"
          type="textarea"
        />
        <CheckboxInput<FormProps>
          name="checkboxInput"
          label="Checkbox Input"
          options={[
            {
              value: 'oi',
              label: 'Oi',
            },
            {
              value: 'tchau',
              label: 'Tchau',
            },
          ]}
        />
        <RadioInput<FormProps>
          name="radioInput"
          label="Radio Input"
          options={[
            {
              value: 'oi',
              label: 'Oi',
            },
            {
              value: 'tchau',
              label: 'Tchau',
            },
          ]}
        />
        <DateTimeInput name="dateTimeLocalInput" type="datetime-local" />
        <DateTimeInput name="timeInput" type="time" />
        <DateTimeInput name="monthInput" type="month" />
        <DateTimeInput name="weekInput" type="week" />
        <SelectInput<FormProps>
          name="selectInput"
          label="Select Input"
          options={[
            {
              value: 'oi',
              label: 'Oi',
            },
            {
              value: 'tchau',
              label: 'Tchau',
            },
          ]}
        />
        <SelectInput<FormProps>
          name="multiSelectInput"
          multiple={true}
          label="Multi Select Input"
          options={[
            {
              value: 'oi',
              label: 'Oi',
            },
            {
              value: 'tchau',
              label: 'Tchau',
            },
          ]}
        />
        <RichTextInput<FormProps> name="richTextInput" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default Home;
