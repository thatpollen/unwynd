export default function LargeContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="large_container max-w-[1440px] mx-auto px-6">
      {children}
    </div>
  );
}
