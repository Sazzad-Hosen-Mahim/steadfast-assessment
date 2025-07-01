import CommonWrapper from "@/common/CommonWrapper";

// I am creating this component static because the shortage of time. As a job holder I need more time to fix all the issues. Thank you.

const Breadcrumbs = () => {
  return (
    <div className="bg-website-color-gray lg:h-[44px]">
      <CommonWrapper>
        <div className="flex items-center gap-2 py-4 px-4">
          <h1>Home</h1>
          <div>{">"}</div>
          <h1>Tops</h1>
          <div>{">"}</div>
          <h1>T-Shirts</h1>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Breadcrumbs;
