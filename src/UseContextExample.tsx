export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section>
      {children}
    </section>
  )
}

export function Heading({ level = 0, children }: { level: number; children: React.ReactNode }) {
  return (
    <h3> {children}-{level}</h3>
  )
}

export default function UseContextExample() {
  return (

    <div>
      <Section>
        <Heading level={1}>主标题</Heading>
        <Heading level={2}>主标题</Heading>
      </Section>
    </div>
  )
}
