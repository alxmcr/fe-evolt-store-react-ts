type FormFieldPriceInputProps = {
  labelText: string;
  inputId: string;
  inputName: string;
  inputValue: number;
  minValueInput?: number;
  maxValueInput?: number;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormFielPriceInput({
  labelText = '',
  inputId = '',
  inputName = '',
  inputValue = 0,
  minValueInput = 0,
  maxValueInput = 100,
  onChange,
}: FormFieldPriceInputProps) {
  return (
    <label htmlFor={inputId} className="flex h-[4.5rem] min-w-[5.875rem] flex-col gap-1  text-perano-500">
      <div className="flex h-[2.875rem] w-[110px] items-center justify-between rounded-md border border-perano-500 bg-white">
        <input
          type="number"
          name={inputName}
          id={inputId}
          className="size-full rounded-l-md px-2 text-xl text-light-950 outline-none"
          value={inputValue}
          onChange={onChange}
          min={minValueInput}
          max={maxValueInput}
          required
        />
        <span className="flex h-[2.875rem] w-12 items-center justify-center rounded-r-md bg-perano-500 text-xl text-white">
          $
        </span>
      </div>
      <span className="text-center text-[.75rem] text-perano-500">{labelText}</span>
    </label>
  );
}
