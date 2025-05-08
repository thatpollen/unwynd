import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/reusable/dialog";
import Image from "next/image";
import {
  Medal,
  NewsletterPopupOne,
  NewsletterPopupTwo,
  Security,
  ThumbLike,
} from "@/components/assets/icons";
import NextImage from "next/image";
import NextLink from "next/link";
import { useLocale } from "next-intl";

interface NewsletterPopupProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function NewsletterPopup({
  isOpen,
  setIsOpen,
}: NewsletterPopupProps) {
  const locale = useLocale();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="backdrop-blur bg-[rgba(0,0,0,0.6)]" />
      <DialogContent className="max-w-[1200px] h-full lg:h-[90vh] min-[1536px]:h-max rounded-none lg:rounded-4xl p-8 flex flex-col gap-6 bg-background-primary overflow-auto">
        <div className="self-center py-3 mt-6 mb-6 block md:hidden">
          <NextLink href={`/${locale}`}>
            <NextImage
              src="/images/navlogo/32.svg"
              alt="logo"
              width={160}
              height={32}
              className="w-auto h-auto cursor-pointer"
              priority
            />
          </NextLink>
        </div>

        <DialogHeader className="flex flex-col md:flex-row items-start md:items-center">
          <figure className="w-full md:w-1/2 rounded-2xl aspect-square overflow-hidden">
            <Image
              src="/images/newsletter-pop-up.png"
              alt="newsletter-img"
              width={1024}
              height={1024}
              className="w-auto h-auto origin-center"
            />
          </figure>

          <div className="w-full md:w-1/2 px-0 py-6 md:px-12 flex flex-col items-start gap-8">
            <DialogTitle className="text-2xl font-medium text-text-primary">
              Thanks for signing up! Save 44% when you reserve your Unwynd lamp
              today!
            </DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start gap-2.5">
                <span className="w-8 h-8">
                  <NewsletterPopupOne />
                </span>

                <DialogDescription className="text-base font-medium text-text-secondary">
                  To receive this offer, simply place a 1€ deposit and you will
                  be locked in for our exclusive discount to pay the lowest
                  possible price during our crowdfunding campaign. Putting down
                  1€ now locks in a 44% discount off our suggested retail price
                  of 89€.
                </DialogDescription>
              </div>
              <div className="flex justify-between items-start gap-2.5">
                <span className="w-8 h-8">
                  <NewsletterPopupTwo />
                </span>
                <DialogDescription className="text-base font-medium text-text-secondary">
                  So you‘ll pay: 39€ plus shipping (will ship from within the
                  EU).
                </DialogDescription>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2.5">
              <button
                className="py-2.5 px-4 bg-[rgba(21,93,252,1)] rounded-full border border-border-whiteOpacity8 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.16)] text-base font-medium text-text-inverted-primary cursor-pointer"
                // type=""
                // name=""
              >
                Reserve My Unwynd Lamp Now
              </button>
              <p className="text-sm font-medium text-text-inverted-tertiary border-b border-border-blackOpacity12 cursor-pointer">
                No thanks, I‘ll just follow along
              </p>
            </div>
          </div>
        </DialogHeader>

        <DialogFooter className="flex flex-col md:flex-row  gap-10 rounded-2xl p-6 bg-surface-inverted-primary">
          <div className="w-full md:w-[33.33%] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span>
                <Medal />
              </span>
              <h6 className="text-heading-6 font-semibold text-text-inverted-primary">
                100% Refund Gurantee
              </h6>
            </div>
            <p className="text-sm font-medium text-text-inverted-secondary">
              If you cancel your reservation, we guarantee you a full refund at
              any time before the project moves into production.
            </p>
          </div>
          <div className="w-full md:w-[33.33%] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span>
                <ThumbLike />
              </span>
              <h6 className="text-heading-6 font-semibold text-text-inverted-primary">
                Transparency Guarantee
              </h6>
            </div>
            <p className="text-sm font-medium text-text-inverted-secondary">
              We will be transparent about the progress of our project
              throughout the entire campaign.
            </p>
          </div>
          <div className="w-full md:w-[33.33%] flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span>
                <Security />
              </span>
              <h6 className="text-heading-6 font-semibold text-text-inverted-primary">
                Secure Payment
              </h6>
            </div>
            <p className="text-sm font-medium text-text-inverted-secondary">
              Add orders are processed through our secure network. your credit
              card information is never stored in any way. We respect your
              privacy.
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
