import { getPostList } from "@/app/_lib/post";

export default async function PostListPage() {
  const postList = await getPostList();
  console.log("postListpostListpostList", postList);

  return (
    <section className="flex flex-wrap gap-10">
      {postList.map((post, idx) => {
        return (
          <div
            className="w-[30%] min-w-[250px] max-w-[500px] h-[300px] border"
            key={idx}
          >
            <div className="w-auto min-w-[250px] h-[200px] flex justify-center items-center overflow-hidden">
              <img
                className="object-cover"
                alt={post.title}
                src={post.thumbnail}
              />
            </div>
            <h2 className="text-2xl">{post.title}</h2>
          </div>
        );
      })}
    </section>
  );
}
