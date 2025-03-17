"use client";

import NextImage from "next/image";
import LargeContainer from "../container/largeContainer";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../reusable/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "../reusable/dialog";

interface CarouselItemProps {
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string[];
  image?: string;
  titleColor?: string;
  subtitleColor?: string;
}

const carouselItems = [
  {
    id: 1,
    title: "Soothe your soul",
    subtitle: "24 meditation sounds",
    description: [
      "The Unwynd Lamp offers a serene escape with 24 soothing sound options designed to enhance your meditation practice.",
      "Immerse yourself in 12 calming nature sounds, including the gentle flow of a stream, the cheerful song of birds, and the crackling warmth of a bonfire.",
      "For those who prefer melodic tranquility, there are 12 types of meditation music available, ranging from gentle melodies to the deep relaxation of binaural beats. These sounds are carefully curated to guide your mind into a state of calm and focus.",
      "If none of these sounds resonate with you, the lamp also functions as a speaker, allowing you to play your own meditation music, ensuring a personalized and peaceful experience tailored to your needs.",
    ],
    image: "/images/meditation-img-1.avif",
    titleolor: "text-text-inverted-secondary",
    subtitleColor: "text-text-inverted-primary",
  },
  {
    id: 2,
    title: "Enlighten your practice",
    subtitle: "RGB light with dynamic lighting modes",
    description: [
      "The Unwynd Lamp offers a versatile lighting experience, allowing you to set the perfect ambiance for your relaxation and meditation.",
      "Choose from any color across the light spectrum to match your mood, creating a personalized atmosphere that complements your practice. Whether you prefer a calming blue, a warm amber, or a vibrant green, the lamp’s color options are virtually limitless.",
      "For a more dynamic experience, explore the lamp’s unique lighting modes. Transform your space with the warm, flickering glow of a crackling fire, or immerse yourself in the ethereal dance of Northern lights as the colors shift and flow. These dynamic modes are designed to enhance your sensory experience, making your meditation sessions even more immersive and calming.",
    ],
    image: "/images/meditation-img-2.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 3,
    title: "Guided serenity",
    subtitle: "Library of meditation exercises",
    description: [
      "The Unwynd Lamp features a variety of meditation exercises, making it an ideal companion for both beginners and seasoned practitioners.",
      "For those new to meditation, guided meditations provide a gentle introduction. A soothing voice will lead you step by step into a state of deep relaxation, helping you to clear your mind and focus your thoughts.",
      "The Unwynd Lamp is also the ideal companion for your breathing exercises. Choose from a collection of carefully selected breathing exercises with different purposes and let your breath be guided by the light. As the lamp’s light gradually brightens, you’ll be prompted to inhale, and as it dims, you’ll be guided to exhale.",
    ],
    image: "/images/meditation-img-3.avif",
    titleColor: "text-text-inverted-secondary",
    subtitleColor: "text-text-inverted-primary",
  },
  {
    id: 4,
    title: "Tap or swipe",
    subtitle: "Dual control",
    description: [
      "The Unwynd Lamp offers flexible control options tailored to your needs.",
      "You can control directly using the buttons on the lamp, making it ideal for those seeking a digital detox. This allows you to disconnect from your devices and fully immerse yourself in your meditation practice without distractions.",
      "Alternatively, the lamp can be controlled via its companion app on your phone. This app enables you to easily customize your meditation experience, adjust settings, and explore all the features with just a few taps.",
      "Whether you enjoy the tactile simplicity of button control or the seamless ease of the app, the Unwynd Lamp offers a personalized meditation experience that adapts to your preferences.",
    ],
    image: "/images/meditation-img-4.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 5,
    title: "Your meditation, your way",
    subtitle: "Custom meditation exercises",
    description: [
      "The Unwynd Lamp offers full customization, allowing you to set the perfect ambiance for your meditation.",
      "Apart from the possibility of easily adjusting the lighting and selecting your preferred sound, you can also set a custom breathing pattern. The lamp’s light will follow your chosen rhythm, becoming brighter to cue your inhalation and dimming to prompt your exhalation.",
      "Once you’ve designed your ideal meditation session, you can easily save it, allowing you to quickly access and reuse your personalized settings during future sessions.",
    ],
    image: "/images/meditation-img-5.avif",
    titleColor: "text-text-inverted-secondary",
    subtitleColor: "text-text-inverted-primary",
  },
  {
    id: 6,
    title: "Recharge and relax",
    subtitle: "Rechargeable with a long battery life",
    description: [
      "The Unwynd Lamp is designed with convenience and longevity in mind. It features a rechargeable battery, ensuring you can enjoy your meditation sessions without the hassle of constantly replacing batteries. Once fully charged, the lamp offers a long battery life, allowing you to use it for extended periods without needing to recharge. This portable design allows you to take the lamp anywhere, whether you’re meditating at home, outdoors, or on the go. Simply recharge the lamp when needed, and it will be ready to provide a peaceful ambiance whenever and wherever you need it.",
    ],
    image: "/images/meditation-img-6.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 7,
    title: "Empower your Zen",
    subtitle: "USB-powered",
    description: [
      "The Unwynd Lamp is equipped with a practical USB charging feature, making it easy to keep powered up wherever you are. Simply connect the lamp to any standard USB port—whether it’s on your computer, a USB wall adapter, or a power bank—and recharge with ease. This versatile charging option ensures that you can maintain your meditation practice without worrying about finding specific chargers, offering both convenience and flexibility.",
    ],
    image: "/images/meditation-img-7.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 8,
    title: "Set and soothe",
    subtitle: "Timer function",
    description: [
      "The meditation lamp includes a practical timer function, allowing you to set it to automatically switch off after a selected period. This feature is perfect for creating a relaxing atmosphere before sleep, as the lamp will gently turn off on its own, helping you unwind and drift off without needing to worry about manually turning it off.",
    ],
    image: "/images/meditation-img-8.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 9,
    title: "Scheduled stillness",
    subtitle: "Alarm function",
    description: [
      "The Unwynd Lamp’s built-in alarm feature helps ensure you never miss a moment of mindfulness. When the alarm activates at your chosen time, a gently pulsating light will invite you to pause and meditate. Simply touch or press any button on the lamp to start your pre-selected meditation exercise. This feature is particularly useful for busy office workers or anyone with a hectic schedule, ensuring you don’t forget to take a moment for your well-being during the day.",
    ],
    image: "/images/meditation-img-9.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
  {
    id: 10,
    title: "Silent sanctuary",
    subtitle: "Headphone jack",
    description: [
      "The Unwynd Lamp is equipped with a headphone jack, offering a private and immersive meditation experience. Simply plug in your headphones to enjoy your chosen meditation sound without disturbing those around you, and without being interrupted by external noise. This feature is perfect for creating a focused, tranquil space wherever you are, whether at home, in the office, or on the go.",
    ],
    image: "/images/meditation-img-10.avif",
    titleColor: "text-text-secondary",
    subtitleColor: "text-text-primary",
  },
];

export default function Features() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [selectedItem, setSelectedItem] = useState<CarouselItemProps | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = (item: CarouselItemProps) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <section className="w-full">
      <LargeContainer>
        <div className="w-full h-[600px]">
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPlugin.current]}
          >
            <CarouselContent>
              {carouselItems?.map((item) => (
                <CarouselItem
                  key={item?.id}
                  className="basis-[calc(100%-10%)] md:basis-[calc(50%-5%)] lg:basis-auto"
                >
                  <figure className="group w-full lg:w-auto h-[524px] aspect-3/4 rounded-2xl overflow-hidden relative cursor-pointer">
                    <div className="text absolute top-8 left-8 right-8 flex flex-col gap-2.5">
                      <span className={`text-sm ${item?.titleColor}`}>
                        {item?.title}
                      </span>
                      <h5 className={`text-H5 ${item?.subtitleColor}`}>
                        {item?.subtitle}
                      </h5>
                    </div>
                    <NextImage
                      src={item?.image}
                      alt="features-img"
                      width={384}
                      height={520}
                      className="max-w-full w-full h-full object-cover"
                      priority
                    />
                    <div
                      className="icon w-11 h-11 absolute right-5 bottom-5 flex justify-center items-center rounded-full bg-surface-inverted-primary text-text-inverted-primary group-hover:bg-brand-orange transition-colors duration-200"
                      onClick={() => openDialog(item)}
                    >
                      <Plus size={24} />
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-6 -bottom-18 flex justify-center items-center gap-2.5">
              <CarouselPrevious className="text-text-inverted-primary bg-brand-orange cursor-pointer" />
              <CarouselNext className="text-text-inverted-primary bg-brand-orange cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </LargeContainer>

      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="w-[98vw] min-[360px]:w-[840px] mx-auto flex flex-col gap-4">
          <DialogHeader>
            <DialogTitle className="text-sm text-text-secondary">
              {selectedItem?.title}
            </DialogTitle>
            <DialogTitle className="text-2xl font-semibold text-text-primary">
              {selectedItem?.subtitle}
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-px bg-surface-tertiary"></div>
          <DialogFooter>
            {selectedItem?.description &&
              selectedItem.description.map((p, index) => (
                <DialogDescription key={index} className="mb-2 text-base">
                  {p}
                </DialogDescription>
              ))}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
