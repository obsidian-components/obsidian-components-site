import { Home } from "lucide-react";
import { useState } from "react";

export default function () {
  const [active, setActive] = useState(0);
  const data = [
    {
      title: "表格",
      image: "./img/dynamicView_table.png",
    },
    {
      title: "画廊",
      image: "./img/dynamicView_gallary.png",
    },
    {
      title: "看板",
      image: "./img/dynamicView_kanban.png",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4 rounded-md p-4">
      <div className="w-full text-center text-4xl p-4 tracking-wider text-gray-600">
        丰富的组件库，像搭积木一样搭建你的
        <span className="font-bold text-orange-600">工作流</span>
      </div>
      <div className="flex flex-row gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              onClick={() => setActive(index)}
              className={`${
                active == index ? "text-gray-700 bg-gray-100" : ""
              } cursor-pointer rounded-md py-1 px-4 text-xs hover:bg-gray-200 hover:text-gray-800 border-gray-200 border font-medium tracking-wider text-gray-500`}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      <div className="border-gray-200 w-full rounded-md p-2">
        <img src={data[active].image} className="w-full h-full" />
      </div>
    </div>
  );
}
