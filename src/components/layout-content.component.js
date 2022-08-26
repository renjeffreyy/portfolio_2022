import * as React from "react";

const LayoutContent = (props) => {
  return (
    <div className="px-4 lg:ml-[300px] bg-content_bg h-full min-h-screen pt-[100px] lg:pt-4 lg:px-8">
    {props.children}
    </div>
  );
};

export default LayoutContent;
