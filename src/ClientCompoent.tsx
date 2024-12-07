import Counter from "./Counter.server";

export default function ClientCompoent() {
  return <div>
    <Counter initialCount={0} />
    ClientCompoent
  </div>;
}
