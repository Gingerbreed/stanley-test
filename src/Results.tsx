import { Result } from "./types/Result";

export default function Results({ rs }: { rs: Result }) {
  return (
    <div className={"indigo"}>
      <h3> {rs.product?.productName} </h3>
      <div>
        <p>Product Id: {rs.product?.productId}</p>
        <p>Metro Area: {rs.metro?.metroAreaTitle}</p>
        <p>Full Name: {rs.project?.fullName}</p>
        <p>Project Group Id: {rs.project?.projectGroupId}</p>
      </div>
    </div>
  );
}
