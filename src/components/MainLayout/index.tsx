type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex items-center justify-center mt-24 lg:mt-10 ">
      <div className="container max-w-screen-xl px-6 md:px-12 lg:px-20">
        {children}
      </div>
    </div>
  );
}
