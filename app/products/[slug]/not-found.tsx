import DetailNotFound from "../../../components/DetailNotFound";

export default function ProductNotFound() {
  return (
    <DetailNotFound
      title="Product Not Found"
      description="This product is not published or the address is incorrect."
      href="/products"
      action="Back to Products"
    />
  );
}
