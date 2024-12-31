export default function Results({ rs }: { rs: Result }) {
  return (
    <div className={"indigo"}>
      <h3> {rs.productName} </h3>
      <div>
        <p>Product Id: {rs.productId}</p>
        <p>Metro Area: {rs.metroArea}</p>
        <p>Full Name: {rs.fullName}</p>
        <p>Project Group Id: {rs.projectGroupId}</p>
      </div>
    </div>
  );
}
