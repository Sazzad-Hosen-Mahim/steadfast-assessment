import CommonWrapper from "@/common/CommonWrapper";

const Breadcrumbs = () => {
  return (
    <div className="bg-website-color-gray lg:h-[44px]">
      <CommonWrapper>
        <div className="flex items-center gap-2 py-4">
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
