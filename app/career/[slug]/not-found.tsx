import DetailNotFound from "../../../components/DetailNotFound";

export default function JobNotFound() {
  return (
    <DetailNotFound
      title="Job not found"
      description="This position is not open or the address is incorrect."
      href="/career"
      action="View open positions"
    />
  );
}