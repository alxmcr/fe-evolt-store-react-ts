type Props = {
  className: string;
  children: React.ReactNode;
};

export default function AppNavLink({ className = '', children }: Props) {
  return (
    <a href="#" className={className}>
      {children}
    </a>
  );
}
