import CommonWrapper from "@/common/CommonWrapper";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchCategories } from "@/store/Slices/categorySlice";
import { useEffect, useRef, useState } from "react";

const Category = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white lg:h-[40px] pt-2 relative">
      <CommonWrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              ref={triggerRef}
              className="flex items-center gap-3 border-r-2 border-gray-300 pr-4 cursor-pointer select-none"
              onMouseEnter={() => setOpen(true)}
              onClick={() => setOpen((v) => !v)}
            >
              <img src="/menu-01.png" alt="menu" />
              <h1>Categories</h1>
            </div>
            <div className="flex items-center lg:gap-4 lg:ml-4">
              {(window.innerWidth < 768
                ? categories.slice(0, 2)
                : categories.slice(0, 3)
              ).map((category) => (
                <button
                  className="text-teal-600 cursor-pointer text-xs lg:text-sm"
                  key={category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex item-center gap-2">
              <img src="/content.png" alt="" className="object-contain" />
              <p>Track Order</p>
            </div>
            <div className="flex item-center gap-2">
              <img
                src="/customer-support.png"
                alt=""
                className="object-contain"
              />
              <h1>Help Center</h1>
            </div>
            <div className="flex item-center gap-2">
              <img
                src="/Animation - 1751095353491 1.png"
                alt=""
                className="object-contain"
              />
              <p>Sell With Us</p>
            </div>
          </div>
        </div>
      </CommonWrapper>

      {open && (
        <div
          ref={popupRef}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full w-full bg-white shadow-2xl border-t border-gray-200 mt-2 py-6 px-8 flex flex-wrap gap-8 z-50"
        >
          {categories.map((category) => (
            <div key={category.id} className="min-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                )}
                <span className="font-semibold">{category.name}</span>
              </div>
              <ul className="ml-2">
                {category.subcategories.map((sub) => (
                  <li key={sub.id} className="mb-1">
                    <span className="font-medium">{sub.name}</span>
                    {sub.subchilds.length > 0 && (
                      <ul className="ml-4 mt-1 text-sm text-gray-500">
                        {sub.subchilds.map((child) => (
                          <li key={child.id}>{child.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
