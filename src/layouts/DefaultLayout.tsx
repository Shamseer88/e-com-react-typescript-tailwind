import type { ReactNode } from "react";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <main>{children}</main>;
};

export default DefaultLayout;
