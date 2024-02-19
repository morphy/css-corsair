import "./Tab.css";
import React from "react";

type TabProps = {
  children?: React.ReactNode;
};

const Tab = (props: TabProps) => {
  const { children } = props;

  return <div className="tab">{children}</div>;
};

export default Tab;
