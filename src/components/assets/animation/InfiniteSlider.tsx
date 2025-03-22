import { motion } from "framer-motion";

interface TestimonialsProps {
  title: string;
  description: string;
  author: string;
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

// Duplicate the array to ensure seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

const InfiniteSlider = () => {
  return (
    <div className="flex overflow-hidden h-96 w-full">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-1/3 flex flex-col space-y-4 p-4 relative overflow-hidden"
        >
          <motion.div
            className="flex flex-col space-y-4 absolute top-0"
            animate={{ y: ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {duplicatedTestimonials.map((testimonial, i) => (
              <div key={i} className="p-4 bg-white shadow-lg rounded-lg">
                <h3 className="font-bold">{testimonial.title}</h3>
                <p className="text-sm">{testimonial.description}</p>
                <span className="text-xs font-semibold">
                  - {testimonial.author}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default InfiniteSlider;
