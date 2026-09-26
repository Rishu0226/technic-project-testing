import DetailNotFound from "./DetailNotFound";

export default function ComingSoon({
  title = "This page is on the way",
  description = "We are still building this part of the site. Reach out if you need it sooner.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <DetailNotFound
      eyebrow="Coming soon"
      title={title}
      description={description}
      href="/contact"
      action="Contact us"
    />
  );
}
