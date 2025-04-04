import Container from "@/components/container/container";
import Footer from "@/components/layout/Footer";
import NextImage from "next/image";
import NextLink from "next/link";

export default function Imprint() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="self-center py-3 mt-8 mb-12">
          <NextLink href="/">
            <NextImage
              src="/images/navlogo/32.svg"
              alt="logo"
              width={160}
              height={32}
              className="w-auto h-auto cursor-pointer"
            />
          </NextLink>
        </div>

        <div className="max-w-full flex justify-center items-center px-6 pb-32 relative z-2">
          <Container>
            <div className="p-8 flex flex-col gap-12 rounded-2xl bg-white shadow-[0_4px_40px_0_rgba(0,0,0,0.08)]">
              <h1 className="text-H1 font-medium text-text-primary">Imprint</h1>
              <div className="w-full h-px bg-surface-tertiary"></div>
              <div className="w-full h-1px bg-surface-tertiary"></div>
              <div className="flex flex-col items-start gap-6">
                <h5 className="text-H5 font-medium text-text-primary">
                  Topus GmbH
                </h5>
                <div className="w-full flex items-start justify-between">
                  <div className="basis-1/2">
                    <p className="text-base text-text-secondary">
                      <span>Wassermasch 15</span>
                      <br />
                      <span>38179 Schwülper</span>
                      <br />
                      <span>Germany</span>
                    </p>
                  </div>
                  <div className="basis-1/2 flex flex-col gap-2.5 justify-center items-start">
                    <div className="flex items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        Email:
                      </span>
                      <span className="text-brand-orange">
                        <NextLink href="mailto:contact@unwynd.net">
                          contact@unwynd.net
                        </NextLink>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        Managing Director:
                      </span>
                      <span className="text-text-secondary">
                        Peter Kallenbach
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        Registered at:
                      </span>
                      <span className="text-text-secondary">
                        Hildesheim local court
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <span className="text-text-primary font-medium">
                        Registration number:
                      </span>
                      <span className="text-text-secondary">HRB 206112</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-surface-tertiary"></div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.5 text-base">
                  <span className="text-text-primary font-medium">
                    Person responsible for content:
                  </span>
                  <span className="text-text-secondary">Peter Kallenbach</span>
                </div>
                <div className="text-base text-text-secondary">
                  (address see above)
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </main>
  );
}
