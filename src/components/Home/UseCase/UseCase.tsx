import { Book, Home, PanelsTopLeft, Target } from "lucide-react";
import { useState } from "react";

export default function () {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "个性主页",
      icon: <Home className={`${active == 0 && "text-pink-500"}`} />,
      description: "每个人都可以打造属于自己的独一无二的 Obsidian 主页",
      image: "./img/usecase_home.png",
    },
    {
      title: "项目管理",
      icon: <PanelsTopLeft className={`${active == 1 && "text-orange-500"}`} />,
      description: "轻松管理你的项目，让你的项目井井有条",
      image: "./img/usecase_projects.png",
    },
    {
      title: "目标追踪",
      icon: <Target className={`${active == 2 && "text-blue-500"}`} />,
      description: "设定目标，追踪进度，成为一个长期价值主义的实践者",
      image: "./img/usecase_target.png",
    },
    {
      title: "书库影城",
      icon: <Book className={`${active == 3 && "text-amber-500"}`} />,
      description: "记录你的阅读和观影历程，与时间成为朋友",
      image: "./img/usecase_books.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full text-center text-3xl p-4 tracking-wider text-gray-600">
        看看 <span className="underline font-bold">Components</span> 为 Obsidian
        带来了什么
      </div>

      <div className="flex flex-row gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className={`cursor-pointer flex flex-col items-center gap-4 w-full rounded-md bg-gray-50 text-gray-400 font-bold p-4 hover:bg-gray-200 hover:text-gray-600 ${
                index == active ? "text-gray-900" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.icon}
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="w-full text-center text-gray-600 tracking-wider">
        {data[active].description}
      </div>
      <div className="border-gray-200 w-full rounded-md p-2">
        <img src={data[active].image} className="w-full h-full" />
      </div>
    </div>
  );
}
