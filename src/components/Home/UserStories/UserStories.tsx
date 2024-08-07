// @ts-ignore
import Masonry from "react-responsive-masonry";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function () {
  const shares = [
    {
      author: "自权的 SPACE",
      description: (
        <div>
          "公众号"自权的 SPACE"作者，效率工具玩家"
          <a
            className=" mt-2 rounded-md block w-full underline font-bold hover:text-stone-900  text-stone-400"
            href={
              "https://mp.weixin.qq.com/s/aGyUOVmOhpj-263K-oxQEQ"
            }
            target="_blank"
          >
            查看教程 →
          </a>
        </div>
      ),
      img: "./img/user-stories/ziquandespace.png",
    },
    {
      author: "二宝学长",
      description: "用 obsidian 写了 14 万字论文的学术写作教练",
      img: "./img/user-stories/erbao.jpg",
    },
    {
      author: "TracingOrigins",
      description: (
        <div>
          <span>江湖人称惊佬，模板库 Rainbow Components 作者。</span>
          <a
            className=" mt-2 rounded-md block w-full underline font-bold hover:text-stone-900  text-stone-400"
            href={
              "https://wxycbt0cjk.feishu.cn/wiki/A47UwJg6NicBWokSABqclzspn4b"
            }
            target="_blank"
          >
            下载模板 →
          </a>
        </div>
      ),
      img: "./img/user-stories/tracingOrigins.png",
    },
    {
      author: "The Fool",
      description: "活跃在 obsidian 社区的热心极客",
      img: "./img/user-stories/thefool.jpg",
    },
    {
      author: "醒醒",
      description: "obsidian手残玩家，人菜瘾大",
      img: "./img/user-stories/xingxing.png",
    },
    {
      author: "vran",
      img: "./img/user-stories/vran.png",
      description: "不小心混进来的～",
    },
  ];
  return (
    <div className="flex flex-col gap-4 px-8 py-2">
      <div className="w-full text-center  text-4xl p-4 tracking-wider text-stone-800 font-bold">
        看看 TA 们是
        <span className=" bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 inline-block text-transparent bg-clip-text">
          如何使用的。
        </span>
      </div>
      <div className="w-full text-center text-xl tracking-wider text-gray-400 font-bold relative">
        美好的事物总是值得分享 🌈
      </div>
      <Masonry columnsCount={3} gutter={16}>
        {shares.map((item, index) => {
          return (
            <div
              key={item.author}
              className={`flex flex-col items-center gap-2 w-full rounded-md text-stone-800 font-bold `}
            >
              <div>
                <Zoom>
                  <img
                    src={item.img}
                    alt={item.author}
                    className="rounded-md"
                  />
                </Zoom>
              </div>
              <div className="w-full mt-2 text-stone-600 tracking-wider text-base">
                @{item.author}
              </div>
              <div className="w-full text-stone-400 tracking-wider text-sm">
                {item.description}
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
