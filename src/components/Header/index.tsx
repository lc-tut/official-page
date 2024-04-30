type HeaderProps = {
  children: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <header className="sticky top-0 z-50">{children}</header>;
}
