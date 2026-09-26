import DetailNotFound from "../../../components/DetailNotFound";

export default function ServiceNotFound() {
  return (
    <DetailNotFound
      title="Service Not Found"
      description="This service is not published or the address is incorrect."
      href="/services"
      action="Explore Our Services"
    />
  );
}
