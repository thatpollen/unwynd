import { ArrowUpFromDot, ChevronDown, Globe } from "lucide-react";
import SubscribeButton from "../assets/buttons/SubscribeButton";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="p-2">
      <div></div>
      <div className="bg-surface-inverted-primary rounded-2xl relative z-2">
        <div className="flex gap-20 p-20">
          <div className="flex flex-col justify-center gap-6 w-1/1">
            <h2 className="text-H2 leading-14 tracking-[-0.04em] text-text-inverted-primary">
              Subscribe to the
              <br />
              <span className="text-transparent bg-[linear-gradient(to_bottom_right,rgb(89,106,255),rgb(211,144,225),rgb(232,109,84),rgb(255,187,108))] bg-clip-text">
                Unwynd newsletter
              </span>
            </h2>
            <p className="text-sm text-text-inverted-tertiary tracking">
              Sign up to receive the latest news and important announcements
              directly in your inbox.
            </p>
            <form className="relative flex items-center">
              <label className="relative w-full inline-flex items-center">
                <input
                  className="w-full text-white placeholder:text-text-secondary rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:ring-1 focus:ring-brand focus:ring-offeset-1 autofill"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <SubscribeButton className="absolute right-2.5" type="submit">
                Subscribe
              </SubscribeButton>
            </form>
          </div>
          <div className="flex flex-col gap-12 w-1/1">
            <div className="flex justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-xs text-text-tertiary">Sitemap</span>
                <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Home</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Features</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">3D view</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Advantages</NextLink>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs text-text-tertiary">Legal</span>
                <ul className="flex flex-col items-start gap-4 text-sm text-text-inverted-primary">
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Terms of Services</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Imprint</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Privacy Policy</NextLink>
                  </li>
                  <li className="hover:text-brand-accent">
                    <NextLink href="/">Declaration Community</NextLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col justify-center">
                <span className="text-sm text-[rgba(255,255,255,0.5)]">
                  Please contact us for support
                </span>
                <NextLink
                  className="text-sm text-brand-accent"
                  href="mailto:contact@unwynd.net"
                >
                  contact@unwynd.net
                </NextLink>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.25 bg-neutral-800 text-sm text-text-inverted-primary p-2.5 rounded-[10px] border border-transparent hover:border-surface-inverted-primary focus:ring-1 focus:ring-surface-inverted-tertiary focus:outline-none cursor-pointer">
                  <span className="">
                    <Globe size={18} />
                  </span>
                  English
                  <span className="">
                    <ChevronDown size={18} />
                  </span>
                </div>
                <span className="w-10 h-10 flex justify-center items-center border border-border-whiteOpacity24 rounded-full cursor-pointer">
                  <ArrowUpFromDot
                    className="text-text-inverted-primary"
                    size={20}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
