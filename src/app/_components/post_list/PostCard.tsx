import { PostCardParam } from "@/app/_types";
import Image from "next/image";

const cardBaseClasses =
  "w-full md:w-[45%] lg:w-[30%] h-[330px] rounded-[10px] border border-black overflow-hidden transition-all duration-150";
const cardHoverClasses = "hover:bg-black hover:text-white hover:scale-105";
const imageWrapperClasses =
  "w-auto h-[200px] flex justify-center items-center overflow-hidden rounded-t-[10px]";
const categoryClasses =
  "bg-grey-50 text-black inline-block px-2 rounded-[2px] mt-[10px]";
const titleClasses = "text-2xl truncate";
const descClasses = "truncate text-grey-100 font-light";

export default function PostCard({ post }: PostCardParam) {
  return (
    <div className={`${cardBaseClasses} ${cardHoverClasses}`}>
      <div className={imageWrapperClasses}>
        <img alt={post.title} src={post.thumbnail} />
      </div>
      <div className="p-[10px]">
        <span className={categoryClasses}>{post.category}</span>
        <h2 className={titleClasses}>{post.title}</h2>
        <p className={descClasses}>{post.desc}</p>
      </div>
    </div>
  );
}
