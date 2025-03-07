import Container from "../container/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../reusable/accordion";

export default function FAQ() {
  return (
    <section className="w-full py-32 relative z-2">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-start lg:justify-between px-4">
          <h2 className="text-H2">FAQ</h2>
          <div className="w-full lg:w-[70%] max-w-full">
            <Accordion className="w-full space-y-2" type="single" collapsible>
              <AccordionItem value="item-1" isBottomLine>
                <AccordionTrigger>
                  Would the Unwynd Lamp be a good fit for someone new to
                  meditation?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our customers have consistently affirmed that the
                  Unwynd Lamp is incredibly helpful for beginners. Through the
                  companion app, users can access a wide range of breathing
                  exercises and guided meditations that provide easy guidance
                  for those just starting out on their meditation journey.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" isBottomLine>
                <AccordionTrigger>
                  Can I use my own meditation music with the Unwynd Lamp?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can utilize the Unwynd Lamp as a speaker and easily
                  play your preferred meditation music.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" isBottomLine>
                <AccordionTrigger>
                  Can I practice my own breathing exercises with the Unwynd
                  Lamp?
                </AccordionTrigger>
                <AccordionContent>
                  Certainly! With the companion app, you can effortlessly set up
                  your personalized breathing intervals. If you wish to reuse
                  your custom breathing exercise, you can save it and even
                  access it directly from the Unwynd Lamp without needing the
                  app.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" isBottomLine>
                <AccordionTrigger>
                  What sets the Unwynd Lamp apart from regular baby lamps?
                </AccordionTrigger>
                <AccordionContent>
                  The Unwynd Lamp stands out for its focus on providing the
                  ultimate meditation experience. From its harmonious design and
                  option for digital detox through the direct control of the
                  lamp without requiring the companion app, to the thoughtfully
                  curated selection of nature sounds, guided meditations, and
                  relaxing lighting modes, every aspect is tailored to enhance
                  meditation. The companion app further facilitates
                  customization, enabling users to easily adapt and save
                  favorite meditation exercises, including personalized
                  breathing intervals.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" isBottomLine>
                <AccordionTrigger>
                  What benefits can I expect from using the Unwynd Lamp?
                </AccordionTrigger>
                <AccordionContent>
                  Engaging in meditation can lead to stress reduction, improved
                  focus, and a heightened sense of well-being. The Unwynd Lamp
                  can assist you in your meditation by creating a peaceful
                  environment and help you concentrate on your meditation with
                  the guided meditations and the breathing light.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  In which languages are the guided meditations offered?
                </AccordionTrigger>
                <AccordionContent>
                  Currently, the guided meditations are available in English and
                  German.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
