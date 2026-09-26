import DetailNotFound from "../../../components/DetailNotFound";

export default function ArticleNotFound() {
  return (
    <DetailNotFound
      title="Article not found"
      description="This article is not published or the address is incorrect."
      href="/blog"
      action="Back to insights"
    />
  );
}
