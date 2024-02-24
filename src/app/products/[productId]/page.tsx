import React from "react";

type paramsType = {
  productId: number;
};

function ProductDetails({ params }: { params: paramsType }) {
  return <div>ProductDetails {params.productId}</div>;
}

export default ProductDetails;
