import { useCallback, useMemo } from "react";

type PropsType = {
  label?: string;
  name: string;
  value: any;
  onChange?: (name: string, value: any) => void;
  disabled?: boolean;
  type?: string;
  error?: boolean;
};

const FormTextField: React.FC<PropsType> = ({
  label = false,
  name,
  value,
  onChange,
  disabled = false,
  type = "text",
  error = false,
}) => {
  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange?.(name, e.target.value),
    [onChange, name]
  );

  const labelClassName = useMemo(
    () =>
      `text-sm xl:text-base 2xl:text-lg fullHD:text-xl font-medium cursor-pointer ${error ? "text-orange-700" : "text-black"}`,
    [error]
  );

  const fieldWrapClassName = useMemo(
    () =>
      `relative w-full bg-orange-50 px-3 py-2 2xl:px-4 2xl:py-3 fullHD:px-5 fullHD:py-4 text-sm rounded xl:rounded-md 2xl:rounded-lg fullHD:rounded-xl ${error ? "text-orange-700" : "text-black"}`,
    [error]
  );

  return (
    <div className="relative w-full flex flex-col gap-2 2xl:gap-3">
      {label && (
        <label htmlFor={name} className={labelClassName}>
          {label}
        </label>
      )}
      <div className={fieldWrapClassName}>
        <input
          value={value}
          onChange={handleChangeValue}
          disabled={disabled}
          className="bg-transparent w-full outline-none text-base xl:text-lg 2xl:text-xl fullHD:text2xl"
          id={name}
          type={type}
        />
      </div>
    </div>
  );
};

export default FormTextField;
