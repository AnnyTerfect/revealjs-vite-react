import React from "react";

function Page({ title, children, ...props }) {
  return (
    <section className="px-20 py-10 h-full" {...props}>
      {!!title && (
        <h1 data-id="title" className="border-b-2 border-black pb-2 !mb-10">
          {title}
        </h1>
      )}
      {children}
    </section>
  );
}

export default Page;
