import NextImage from "next/image";
import LargeContainer from "../container/largeContainer";

export default function Features() {
  return (
    <section className="w-full">
      <LargeContainer>
        <div className="w-full h-[600px]">
          <div className="flex flex-row items-center gap-2.5 w-full h-full overflow-hidden">
            <div className="rounded-2xl overflow-hidden">
              <div className="text"></div>
              <figure className="">
                <NextImage
                  src="/images/meditation-img-1.avif"
                  alt="features-img"
                  width={400}
                  height={524}
                  className="max-w-full w-full"
                  priority
                />
              </figure>
              <div className="icon"></div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="text"></div>
              <figure className="">
                <NextImage
                  src="/images/meditation-img-2.avif"
                  alt="features-img"
                  width={400}
                  height={524}
                  className="max-w-full w-full"
                  priority
                />
              </figure>
              <div className="icon"></div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="text"></div>
              <figure className="">
                <NextImage
                  src="/images/meditation-img-3.avif"
                  alt="features-img"
                  width={400}
                  height={524}
                  className="max-w-full w-full"
                  priority
                />
              </figure>
              <div className="icon"></div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="text"></div>
              <figure className="">
                <NextImage
                  src="/images/meditation-img-5.avif"
                  alt="features-img"
                  width={400}
                  height={524}
                  className="max-w-full w-full"
                  priority
                />
              </figure>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </LargeContainer>
    </section>
  );
}
