const tab_menu = ["All", "Dev"];
export default function PostTabMenu() {
  return (
    <div className="flex gap-3 mb-[30px]">
      {tab_menu.map((item, idx) => {
        return (
          <button
            key={idx}
            className="inline-block bg-black text-white px-8 rounded-[20px] text-3xl"
          >
            {item} (19)
          </button>
        );
      })}
    </div>
  );
}
