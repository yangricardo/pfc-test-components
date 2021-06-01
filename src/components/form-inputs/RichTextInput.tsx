import {
  Controller,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import 'suneditor/dist/css/suneditor.min.css';
import 'react-quill/dist/quill.snow.css';

export const RichTextInput = <TFieldValues extends FieldValues>({
  name,
}: {
  name: Path<TFieldValues>;
  registerOptions?: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
}) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Editor
          // onInit={(evt, editor) => (editorRef.current = editor)}
          id="tiny-react_16681000391622561487775"
          apiKey="k55t9eo0qznzspczem8lpl5ghaxz79aa8peneun0vkz1vv3h"
          onEditorChange={(content) => setValue(name, content as any)}
          initialValue={field.value}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
      )}
    />
  );
};
