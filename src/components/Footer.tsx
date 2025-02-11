const Footer = (): JSX.Element => {
  return (
    <section className="h-[6dvh] w-screen flex justify-end items-center gap-1 p-4 backdrop-blur-3xl border-t-2 border-t-black italic">
      that's all from me for now— connect with me on{" "}
      <a
        href="https://www.linkedin.com/in/alton-banushi/"
        className="underline"
      >
        {" "}
        linkedin{" "}
      </a>
      to stay in touch.
    </section>
  );
};

export default Footer;
