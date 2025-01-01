import { Result } from "./types/Result";

export default function Results({ rs }: { rs: Result }) {
  return (
    <div className={"indigo"}>
      <h3>
        {" "}
        {rs.product?.productName
          ? rs.product.productName
          : "No Product Name"}{" "}
      </h3>
      <div>
        <p>
          Product Id: {rs.product?.productId ? rs.product.productId : "No Id"}
        </p>
        <p>Metro Area: {rs.metro?.metroAreaTitle}</p>
        <p>
          Full Name: {rs.project?.fullName ? rs.project.fullName : "No Project"}
        </p>
        <p>
          Project Group Id:{" "}
          {rs.project?.projectGroupId
            ? rs.project.projectGroupId
            : "No Project"}
        </p>
      </div>
    </div>
  );
}
