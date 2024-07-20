type BlogLinkType = {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const BlogLink = ({ href, target = "_blank" }: BlogLinkType): JSX.Element => {
  return (
    <a href={href} target={target} className="border border-red-500">
      content
    </a>
  );
};

export default BlogLink;
