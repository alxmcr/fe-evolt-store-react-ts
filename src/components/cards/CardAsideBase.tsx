type Props = {
  title: string;
  children?: React.ReactNode;
};

export default function CardAsideBase({ title = '', children }: Props) {
  return (
    <article className="flex flex-col gap-3">
      <header className="flex flex-col gap-1">
        <h4 className="font-bold uppercase tracking-widest text-perano-500">{title}</h4>
      </header>
      {children}
    </article>
  );
}
