type PlaceholderSectionProps = {
  heading: string;
  description?: string;
};

const PlaceholderSection = ({ heading, description }: PlaceholderSectionProps) => {
  return (
    <div className="rounded-lg border border-dashed border-border p-6 bg-card/50">
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      {description ? (
        <p className="mt-2 text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
};

export default PlaceholderSection;


