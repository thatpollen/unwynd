import OrderButton from "../assets/buttons/OrderButton";
import { NavLogo } from "../assets/icons";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-4 z-10">
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-white shadow-[0_4px_24px_2px_rgba(0,0,0,0.04)] sticky top-4 z-10">
          <div className="flex items-center gap-12">
            <NextLink href="/">
              <span>
                <NavLogo />
              </span>
            </NextLink>
            <ul className="flex items-center gap-6">
              <li className="text-xs font-medium text-text-primary">
                <NextLink href="/">Features</NextLink>
              </li>
              <li className="text-xs font-medium text-text-primary">
                <NextLink href="/">3D view</NextLink>
              </li>
              <li className="text-xs font-medium text-text-primary">
                <NextLink href="/">Advantages</NextLink>
              </li>
            </ul>
          </div>
          <div className="flex items-stretch gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-text-primary font-medium">
                Unwynd
              </span>
              <span className="text-xs leading-4 text-text-tertiary">
                Meditation lamp
              </span>
            </div>
            <div className="grow w-px bg-stroke-opacity16"></div>
            <OrderButton variant="primary" type="button">
              Order now
            </OrderButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
