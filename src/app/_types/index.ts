export type Post = {
  url: string;
  categoryPath: string;
  categoryPublicName: string;
  slug: string | undefined;
  title: string;
  date: Date;
  desc: string;
  thumbnail: string;
  category: string;
  dateString: string;
  content: string;
  readingMinutes: number;
};

export interface PostCardParam {
  post: Post;
}
