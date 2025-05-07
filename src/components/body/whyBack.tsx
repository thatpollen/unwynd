import Container from "@/components/container/container";
import {
  SmallHealthcare,
  Customizable,
  Iphone,
  Discount,
} from "../assets/icons";
import Image from "next/image";
import SubscribeButton from "@/components/assets/buttons/SubscribeButton";
import cn from "@/lib/utils/classname";

export default function WhyBack() {
  return (
    <section className="w-full">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 px-6 py-24 border-y border-border-blackOpacity12">
          <div className="w-full md:w-[56%] flex flex-col space-y-6">
            <h2 className="text-heading-4 md:text-heading-3 lg:text-heading-2 font-medium text-text-primary">
              Why Back Unwynd?
            </h2>
            <div className="">
              <div className="flex items-center gap-6 py-6 border-b border-border-blackOpacity12">
                <span className="w-10 h-10">
                  <SmallHealthcare />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-text-primary font-semibold">
                    Focused on Meditation
                  </p>
                  <p className="text-base text-text-secondary font-medium">
                    Built with mindfulness at the center.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-border-blackOpacity12">
                <span className="w-10 h-10">
                  <Customizable />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-text-primary font-semibold">
                    Fully Customizable
                  </p>
                  <p className="text-base text-text-secondary font-medium">
                    Choose your own light and sound; optionally, set a breathing
                    pattern.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-border-blackOpacity12">
                <span className="w-10 h-10">
                  <Iphone />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-text-primary font-semibold">
                    Standalone or App Enhanced
                  </p>
                  <p className="text-base text-text-secondary font-medium">
                    Use on its own or control with the free companion app.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-border-blackOpacity12">
                <span className="w-10 h-10">
                  <Discount />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-text-primary font-semibold">
                    Affordable
                  </p>
                  <p className="text-base text-text-secondary font-medium">
                    Premium features for an affordable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[44%] rounded-2xl bg-surface-tertiary overflow-hidden">
            <div className="flex justify-center items-center py-8 bg-surface-secondary">
              <figure className="aspect-3/4 w-[209px] h-[280px]">
                <Image
                  src="/images/unwynd-lamp.avif"
                  alt="unwynd-lamp"
                  width={600}
                  height={800}
                  className="max-w-full w-auto h-auto"
                />
              </figure>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <p className="text-base font-medium text-text-secondary">
                If this sounds like the lamp you’ve always wanted, sign up to
                stay informed and be the first to know about the launch to
                profit from early bird discounts!
              </p>
              <form
                // onSubmit={subscribeUser}
                className={cn("flex flex-col gap-1.5")}
              >
                <div className="w-auto relative flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
                  <label className="relative w-full inline-flex items-center">
                    <input
                      className={cn(
                        "w-full bg-surface-primary placeholder:text-text-tertiary rounded-full p-4 border border-border-whiteOpacity12 focus:outline-none focus:border-dotted autofill"
                      )}
                      id="email"
                      // ref={inputRef}
                      type="email"
                      name="email"
                      autoComplete="email"
                      // placeholder={`${t("input")}`}
                      placeholder="Please enter your email"
                      required
                    />
                  </label>
                  <SubscribeButton
                    className={cn(
                      "relative md:absolute md:right-2.5 bg-surface-inverted-primary text-text-inverted-primary py-2 px-4"
                    )}
                    type="submit"
                    name="subscribe"
                  >
                    Get Notified
                  </SubscribeButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
