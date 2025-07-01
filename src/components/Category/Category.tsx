import CommonWrapper from "@/common/CommonWrapper";

const Category = () => {
  return (
    <div className="bg-white lg:h-[40px] pt-2">
      <CommonWrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-3 border-r-2 border-gray-300 pr-4">
              <img src="/public/menu-01.png" alt="" className="" />
              <h1>Categories</h1>
            </div>
            {/* categories  */}
            <div>categories</div>
          </div>

          {/* right side element  */}
          <div className="flex items-center gap-4">
            {/* track order  */}
            <div className="flex item-center gap-2">
              <img
                src="/public/content.png"
                alt=""
                className="object-contain"
              />
              <p>Track Order</p>
            </div>
            <div className="flex item-center gap-2">
              <img
                src="/public/customer-support.png"
                alt=""
                className="object-contain"
              />
              <h1>Help Center</h1>
            </div>
            <div className="flex item-center gap-2">
              <img
                src="/public/Animation - 1751095353491 1.png"
                alt=""
                className="object-contain"
              />
              <p>Sell With Us</p>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Category;
