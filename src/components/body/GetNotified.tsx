import GetNotifiedForm from "../assets/forms/GetNotifiedForm";

export default function GetNotified() {
  return (
    <section className="p-0 md:p-2">
      <div className="py-4 sm:py-6 md:py-24 bg-surface-tertiary rounded-none md:rounded-2xl">
        <div className="max-w-[918px] mx-auto">
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
                <GetNotifiedForm variant="comingsoon" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
