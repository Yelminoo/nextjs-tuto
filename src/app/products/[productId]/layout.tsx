import React from "react";

function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>ProductDetail Layout{children} </div>;
}

export default ProductDetailLayout;
