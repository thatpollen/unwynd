import SubscribeButton from "../assets/buttons/SubscribeButton";
import Container from "../container/container";
import cn from "@/lib/utils/classname";

export default function GetNotified() {
  return (
    <section className="p-2">
      <div className="py-4 sm:py-6 md:py-24 rounded-2xl bg-surface-tertiary">
        <Container>
          <div className="px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col md:flex-row items-center gap-6 rounded-2xl p-12 bg-surface-primary">
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h5 className="text-heading-5 font-semibold bg-[linear-gradient(to_bottom_right,#1F3FEA,#671FEA,#EA1FC9,#EA1F5E,#EAAD1F,#AAEA1F)] bg-clip-text text-transparent">
                  Coming soon – the Unwynd meditation lamp
                </h5>
                <p className="font-medium text-text-tertiary">
                  Join our newsletter to get notified when our crowdfunding
                  campaign starts and be first in line for early bird discounts:
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <form className="flex flex-col gap-4">
                  <label className="relative w-full inline-flex items-center">
                    <input
                      className={cn(
                        "w-full text-base font-medium placeholder:text-text-quaternary rounded-full p-4 border border-border-blackOpacity8 focus:outline-none focus:border-dotted autofill"
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
                    className="bg-[rgba(21,93,252,1)] text-text-inverted-primary text-base font-medium py-2"
                    type="submit"
                    name=""
                  >
                    Get Notified
                  </SubscribeButton>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
