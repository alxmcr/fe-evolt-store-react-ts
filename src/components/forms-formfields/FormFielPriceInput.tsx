type FormFieldPriceInputProps = {
  labelText: string;
  inputId: string;
  inputName: string;
  inputValue: number;
  inputMin: number;
  inputMax: number;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormFielPriceInput({
  labelText = '',
  inputId = '',
  inputName = '',
  inputValue = 0,
  inputMin = 0,
  inputMax = 100,
  onChange,
}: FormFieldPriceInputProps) {
  return (
    <label
      htmlFor={inputId}
      className="flex h-[4.5rem] min-w-[5.875rem] flex-col gap-2  text-perano-300"
    >
      <div className="flex h-[2.875rem] w-[108px] items-center justify-between rounded-md border border-perano-300 bg-white">
        <input
          type="number"
          name={inputName}
          id={inputId}
          className="size-full rounded-l-md px-2 text-xl outline-none"
          value={inputValue}
          onChange={onChange}
          min={inputMin}
          max={inputMax}
          required
        />
        <span className="flex h-[2.875rem] w-12 items-center justify-center rounded-r-md bg-perano-300 text-xl text-white">
          $
        </span>
      </div>
      <span className="text-[.75rem] text-perano-200">{labelText}</span>
    </label>
  );
}
