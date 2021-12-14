import Image from "next/image";

export default (props: any) => (
  <>
    <main>
      <section className="hero">
        <div className="hero-body">
          <Image src="/awana.jpeg" alt="Awana Logo" width={80} height={80} />
          <p className="title">
            Cohort Students
          </p>
          {props.content}
        </div>
      </section>
    </main>
  </>
)

