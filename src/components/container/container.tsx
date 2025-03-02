export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-[1200px] mx-auto px-6">{children}</div>
  );
}
