import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <div className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase rounded-md cursor-pointer hover:bg-blue-900 -rotate-6">
      {children}
    </div>
  );
};

export default SectionHeading;
