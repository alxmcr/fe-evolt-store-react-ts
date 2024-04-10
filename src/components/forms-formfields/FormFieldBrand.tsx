type Props = {
  id: string;
  label: string;
};

export default function FormFieldBrand({ id = '', label = '' }: Props) {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="size-[25px] rounded-full bg-perano-500"
      />
      <span>{label}</span>
    </label>
  );
}
