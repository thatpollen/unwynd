import Container from "./container/container";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="inner-full-width bg-gray-100 rounded-2xl h-screen flex flex-">
          <div>
            <h1>
              Unwynd <br />
              The Breathing Lamp
            </h1>
            <p>
              Experience the effortless serenity of meditation with Unwynd –
              elevate your practice today and discover how easy finding your
              calm can be.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
