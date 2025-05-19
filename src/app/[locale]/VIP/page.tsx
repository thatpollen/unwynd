import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import NextLink from "next/link";
import NextImage from "next/image";
import { useLocale } from "next-intl";

export default function VIP() {
  const locale = useLocale();

  return (
    <main>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="self-center py-3 mt-6 mb-6 block md:hidden">
          <NextLink href={`/${locale}`}>
            <NextImage
              src="/images/navlogo/32.svg"
              alt="logo"
              width={160}
              height={32}
              className="w-auto h-auto cursor-pointer"
            />
          </NextLink>
        </div>
        <div className="max-w-[446px] rounded-2xl bg-surface-primary drop-shadow-[0_1px_4px_0_rgba(0,0,0,0.08)] overflow-hidden my-0 md:my-48">
          <figure className="aspect-4/3">
            <Image
              src="/images/vip-img.jpg"
              alt="vip-img"
              width={1024}
              height={768}
              className="w-auto h-auto"
            />
          </figure>
          <div className="p-8 flex flex-col gap-6 drop-shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-4">
              <h3 className="text-heading-3 font-semibold text-center bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent">
                Congrats! You‘re a VIP
              </h3>
              <p className="text-base font-medium text-center text-text-tertiary">
                By reserving you can purchase the Unwynd lamp at the lowest
                possible price during our crowdfunding campaign. Be sure to
                check your email for your receipt and more information as we get
                closer to our launch.
              </p>
            </div>
            <button className="py-2.5 px-4 bg-[rgba(21,93,252,1)] rounded-full border border-border-whiteOpacity8 shadow-[inset_0_1px_1px_0_rgba(255,255mi,255,0.16)] text-base font-medium text-text-inverted-primary cursor-pointer">
              Join our VIP Facebook Group
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
