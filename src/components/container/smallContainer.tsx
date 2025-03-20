export default function SmallContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="small_container max-w-[1024px] mx-auto px-6">
      {children}
    </div>
  );
}
