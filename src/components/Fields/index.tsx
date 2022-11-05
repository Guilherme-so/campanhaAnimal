import { InputHTMLAttributes } from 'react';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
}

// export function Field({ ...rest }: FieldProps) {
//   return <input {...rest} />;
// }
const Field = ({ ...rest }: FieldProps) => {
  return <input {...rest} />;
};
export default Field;
