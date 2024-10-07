import { getPostList } from "@/app/_lib/post";
import PostTabMenu from "./PostTabMenu";
import PostCard from "./PostCard";

const wrap = "flex flex-wrap gap-10 justify-between cursor-pointer";

export default async function PostListPage() {
  const postList = await getPostList();

  return (
    <div>
      <PostTabMenu />
      <section className={wrap}>
        {postList.map((post, idx) => (
          <PostCard post={post} idx={idx} />
        ))}
      </section>
    </div>
  );
}
