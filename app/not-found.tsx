import DetailNotFound from "../components/DetailNotFound";

export default function NotFound() {
  return (
    <DetailNotFound
      title="Page not found"
      description="That address is not on this site. Check the link, or go back to the home page."
      href="/"
      action="Back to home"
    />
  );
}
