import { Book, Home, PanelsTopLeft, Target } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function () {
  const data = [
    {
      title: "个性主页",
      icon: <Home className={`text-pink-500`} />,
      description: "每个人都可以打造属于自己的独一无二的 Obsidian 主页",
      image: "./img/usecase//home.png",
      url: "https://wxycbt0cjk.feishu.cn/wiki/UrTqwG98Lij4aLkczVbcOxX7njg",
    },
    {
      title: "项目管理",
      icon: <PanelsTopLeft className={`text-orange-500`} />,
      description: "在一个地方计划和管理项目，数据一览无余",
      image: "./img/usecase/project-management.png",
      url: "https://wxycbt0cjk.feishu.cn/wiki/QdHVwJqXmix3phkeVPucPvFGnNd",
    },
    {
      title: "目标追踪",
      icon: <Target className={`text-blue-500`} />,
      description: "设定目标，追踪进度，成为一个长期价值主义的实践者",
      image: "./img/usecase/habit.png",
      url: "https://wxycbt0cjk.feishu.cn/wiki/R6vjwvnJtiHlyHknf80cQ8X5nBb",
    },
    {
      title: "书库影城",
      icon: <Book className={`text-amber-500`} />,
      description: "记录你的阅读和观影历程，与时间成为朋友",
      image: "./img/usecase/books-management.png",
    },
  ];

  return (
    <div className="flex flex-col gap-4 px-8 bg-slate-50 py-2">
      <div className="w-full text-center  text-4xl p-4 tracking-wider text-stone-600 font-bold">
        来了解一下。
      </div>
      <div className="w-full text-center text-xl tracking-wider text-gray-400 font-bold relative">
        想象不再受限 🎉
      </div>

      <div className="flex flex-row justify-center gap-4 px-4 py-4 md:flex-nowrap sm:flex-wrap">
        {data.map((item, index) => {
          return (
            <div
              key={item.title}
              className={`cursor-pointer flex flex-col items-center gap-4 w-full rounded-md bg-white shadow text-stone-800 font-bold p-4 hover:bg-neutral-50`}
            >
              {item.icon}
              {item.title}
              <div className="w-full text-center text-stone-500 tracking-wider">
                {item.description}
              </div>
              {item.url && (
                <div>
                  <a
                    className="rounded-md w-full py-1 px-4 underline font-bold hover:text-stone-900  text-stone-500"
                    href={item.url}
                    target="_blank"
                  >
                    下载模板 →
                  </a>
                </div>
              )}

              <div className="border-gray-200 w-full rounded-md p-4">
                <Zoom>
                  <img src={item.image} className="w-full" />
                </Zoom>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
