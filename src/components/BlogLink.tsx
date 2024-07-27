type BlogLinkType = {
  href: string;
  title: string;
  previewText: string;
  date: Date;
  image: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const BlogLink = ({
  href,
  title,
  previewText,
  date,
  image,
  className,
  target = "_blank",
}: BlogLinkType): JSX.Element => {
  return (
    <div>
      <div className="h-4 w-4 bg-white rounded-full absolute ml-[-40px] mt-6" />
      <a
        href={href}
        target={target}
        className={`grid grid-cols-7 hover:animate-pulse hover:outline hover:outline-white hover:rounded-2xl p-4 gap-4 ${className}`}
      >
        <div className="flex flex-col justify-between items-end min-h-full col-span-7 lg:col-span-5 pr-2 lg:pr-4">
          <div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
              {title}
            </h2>
            <p className="text-md md:text-lg lg:text-2xl">{previewText}...</p>
          </div>
          <p className="text-sm italic">
            {date.getMonth() + "-" + date.getDate() + "-" + date.getFullYear()}
          </p>
        </div>
        <img
          src={image}
          alt="statistics book page"
          className="col-span-7 lg:col-span-2 rounded-2xl block min-w-full"
        />
      </a>
    </div>
  );
};

export default BlogLink;
