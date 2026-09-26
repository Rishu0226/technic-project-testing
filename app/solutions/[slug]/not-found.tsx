import DetailNotFound from "../../../components/DetailNotFound";

export default function SolutionNotFound() {
  return (
    <DetailNotFound
      title="Solution Not Found"
      description="This solution is not published or the address is incorrect."
      href="/solutions"
      action="Explore Solutions"
    />
  );
}
