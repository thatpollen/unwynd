import Container from "../container/container";

export default function ThreeD() {
  return (
    <section className="w-full py-24">
      <Container>
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <h1 className="text-H1 text-center">
              <span className="text-text-tertiary">Harmony in</span>
              <br />
              Three Dimensions
            </h1>
            <p className="tex-sm text-text-secondary text-center">
              Crafted with meticulous attention to detail, the Unwynd lamp is
              more than just an illuminating presence — it&apos;s a serene
              sanctuary in itself. Every aspect of its design has been
              thoughtfully considered to enhance your meditation experience.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
}
