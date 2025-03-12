import Container from "../container/container";
import NextImage from "next/image";
import { Graphic, Vector } from "../assets/icons";

interface TestimonialsProps {
  title?: string;
  description?: string;
  author?: string;
}

const testimonials: TestimonialsProps[] = [
  {
    title: "The versatility of this meditation lamp is unparalleled",
    description:
      "From the calming pulsating light for breathing exercises to the vast selection of nature sounds and meditation music, it's an all-in-one relaxation tool",
    author: "Charlotte L.",
  },
  {
    title: "It guides my breathing effortlessly",
    description:
      "As someone who struggles with focus during meditation, the pulsating light feature of this lamp has been a game-changer. It guides my breathing effortlessly, allowing for deeper relaxation and mindfulness",
    author: "Daniel K.",
  },
  {
    title: "I love how seamlessly this lamp integrates into my daily routine",
    description:
      "Whether I need a moment of tranquility at work or a soothing ambiance for bedtime meditation, its dynamic lighting and sound options always cater to my needs",
    author: "Glen S.",
  },
  {
    title: "Discreet way to de-stress",
    description:
      "Working in a busy open space office, I needed a discreet way to de-stress without disturbing my colleagues. This lamp's silent mode, combined with its elegant design, allows me to practice mindfulness without drawing attention",
    author: "Max D.",
  },
  {
    title: "Aesthetic lamp",
    description:
      "The wooden design of this aesthetic lamp brings a touch of sophistication to any room. It effortlessly transitions from a meditation aid to a stylish table lamp, enhancing both my space and my well-being",
    author: "Julia R.",
  },
  {
    title: "Controlling this lamp is a breeze",
    description:
      "Controlling this lamp is a breeze, whether through the companion app or the buttons on the lamp itself. It's the perfect blend of modern convenience and timeless relaxation",
    author: "Alex S.",
  },
  {
    title: "I love how easy it is to customize",
    description:
      "I love how easy it is to customize my meditation sessions with this lamp. With just a few taps on the app, I can create the perfect environment for deep relaxation and introspection",
    author: "Paula K.",
  },
  {
    title: "The option for direct control on the lamp is irreplaceable",
    description:
      "As someone who values unplugging from technology, the option for direct control on the lamp is irreplaceable. It allows me to enjoy a digital detox while still benefiting from the lamp's calming features",
    author: "Felix S.",
  },
  {
    title: "I appreciate the simplicity and effectiveness of this lamp",
    description:
      "As a beginner to meditation, I appreciate the simplicity and effectiveness of this lamp. It guides me through breathing exercises with ease, making it accessible for anyone looking to start their mindfulness journey",
    author: "Peter J.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-2">
      <div className="rounded-2xl bg-background-tertiary pt-50 pb-12 px-4">
        <Container>
          <div className="flex flex-col justify-center items-center gap-12 flex-nowrap">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-0 w-full p-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-H4 md:text-H3 lg:text-[42px] font-medium text-center md:text-left">
                  Our testimonials
                </h2>
                <p className="text-base text-text-secondary text-center md:text-left">
                  Happy customers that enjoy our lamp
                </p>
              </div>
              <div className="w-[214px] h-[162px] relative">
                <div className="w-12 h-12 aspect-square rounded-full absolute top-5 left-0 overflow-hidden">
                  <NextImage
                    src="/images/avatars/avatar-img-1.avif"
                    alt="avatar-img"
                    width={48}
                    height={48}
                    className="w-auto h-auto"
                  />
                </div>
                <div className="w-17 h-17 aspect-square rounded-full absolute top-0 right-7 overflow-hidden">
                  <NextImage
                    src="/images/avatars/avatar-img-2.avif"
                    alt="avatar-img"
                    width={68}
                    height={68}
                    className="w-auto h-auto"
                  />
                </div>
                <div className="w-20 h-20 aspect-square rounded-full absolute bottom-0 left-[38px] overflow-hidden">
                  <span className="w-full h-full flex justify-center items-center bg-black">
                    <Vector />
                  </span>
                </div>
                <div className="w-14 h-14 aspect-square rounded-full absolute bottom-1 right-0 overflow-hidden">
                  <NextImage
                    src="/images/avatars/avatar-img-4.avif"
                    alt="avatar-img"
                    width={56}
                    height={56}
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="testimonials_wrapper flex justify-center items-center gap-2 flex-nowrap h-[1024px] overflow-hidden">
                <div className="flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden md:flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hidden lg:flex flex-col items-center gap-2">
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="bg-background-primary overflow-hidden rounded-2xl hover:bg-background-secondary transition-all duration-300 ease-in-out"
                      key={index}
                    >
                      <div className="flex flex-col items-start gap-6 px-6 py-8">
                        <span className="w-8 h-8">
                          <Graphic />
                        </span>
                        <div className="w-full flex flex-col gap-2">
                          <h6 className="text-H6 font-medium">
                            {testimonial?.title}
                          </h6>
                          <p className="text-sm text-text-secondary">
                            {testimonial?.description}
                          </p>
                        </div>
                        <span className="text-base text-text-primary font-medium tracking-[-0.03em]">
                          {testimonial?.author}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
