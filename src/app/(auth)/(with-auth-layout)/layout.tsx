import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div>Auth layout {children}</div>;
}

export default layout;
