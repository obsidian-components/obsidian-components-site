import { Car, Rocket } from "lucide-react";

export default function () {
  const iconSize = 36;
  const iconClass = "text-slate-800";
  const versions = [
    {
      title: "大版本授权",
      price: "28 元",
      icon: <Car size={iconSize} className={iconClass} />,
      description: (
        <div>
          大版本授权用户可获得购买时所属大版本的永久使用权，
          <span className="text-red-500">跨大版本升级需要重新购买使用权。</span>
          <a
            href="https://wxycbt0cjk.feishu.cn/wiki/LnQMwwbZui7uFXkfkYocmHmNnpx#G23HdMiNFoYOVDx2yp5cuoMhnMe"
            target="blank"
            className="underline text-blue-400 block mt-2"
          >
            点击查看详细说明 →
          </a>
        </div>
      ),
    },
    {
      title: "永久授权",
      price: "88 元",
      icon: <Rocket size={iconSize} className={iconClass} />,
      description: <div>永久授权不受版本更新限制</div>,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full text-4xl font-bold text-center p-4">
        两种
        <span className="font-bold bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 inline-block text-transparent bg-clip-text">
          买断制授权
        </span>
        ，灵活选择
      </div>
      <div className="w-full font-bold text-center text-gray-500">
        <a href="https://wxycbt0cjk.feishu.cn/wiki/LnQMwwbZui7uFXkfkYocmHmNnpx" className="underline">
          点击这里查看详细的购买协议
        </a>
      </div>
      <div className="flex gap-8 justify-center">
        {versions.map((version, index) => {
          return (
            <div className="flex flex-col rounded-xl bg-zinc-50 border border-zinc-50 h-96 w-72">
              <div className="p-4 border-slate-100 flex flex-col gap-4">
                <div>{version.icon}</div>
                <div className="text-slate-800 font-bold text-md">
                  {version.title}
                </div>
                <div className="text-slate-800 font-bold text-3xl">
                  {version.price}
                </div>
              </div>
              <div className="w-full p-4">
                <button
                  className="rounded-md w-full py-1 px-4 font-bold hover:bg-gray-600 hover:text-white border border-gray-500 text-slate-800 bg-white"
                  onClick={() =>
                    window.open(
                      "https://wxycbt0cjk.feishu.cn/wiki/Hfz9wTuqpiDIkokAMETcoRjnnmh"
                    )
                  }
                >
                  获取 →
                </button>
              </div>
              <div className="h-full p-4 text-slate-600">
                {version.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
