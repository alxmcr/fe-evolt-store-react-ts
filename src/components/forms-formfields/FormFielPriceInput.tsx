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
      className="flex h-[4.5rem] w-[5.875rem] flex-col gap-2 text-perano-300"
    >
      <span>{labelText}</span>
      <div className="flex h-14 w-[108px] items-center justify-between rounded-2xl bg-white">
        <input
          type="number"
          name={inputName}
          id={inputId}
          className="size-full rounded-l-xl px-1 text-xl outline-none"
          value={inputValue}
          onChange={onChange}
          min={inputMin}
          max={inputMax}
          required
        />
        <span className="flex h-full w-12 items-center justify-center rounded-r-xl bg-black text-xl text-white">
          $
        </span>
      </div>
    </label>
  );
}
