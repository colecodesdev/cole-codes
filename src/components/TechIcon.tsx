export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="size-10 fill-[url(#tech-icon-gradient)]" />;
};
