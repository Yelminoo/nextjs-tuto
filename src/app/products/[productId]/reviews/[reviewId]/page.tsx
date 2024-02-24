import React from "react";
import NotFound from "./not-found";

type paramsType = {
  reviewId: number;
};

function ReviewDetails({ params }: { params: paramsType }) {
  if (params.reviewId < 1000) {
    return <div>ReviewDetails {params.reviewId}</div>;
  } else {
    return <NotFound />;
  }
}

export default ReviewDetails;
