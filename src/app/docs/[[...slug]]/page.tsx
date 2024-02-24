import React from "react";

function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length == 2) {
    return (
      <div>
        DocHomePage feature -{params.slug[0]} concept -{params.slug[1]}
      </div>
    );
  } else if (params.slug?.length == 1) {
    return <div>DocHomePage feature {params.slug[0]}</div>;
  }
  return <h1>Docs home page</h1>;
}

export default Docs;
