import path from "path";
import { sync } from "glob";
import fs from "fs";
import dayjs from "dayjs";
import { PostMatter } from "../_config/types";
import matter from "gray-matter";
import readingTime from "reading-time";

const BASE_PATH = "/src/app/_posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 모든 MDX 파일 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return postPaths;
};

// MDX 파일 파싱
const parsePost = async (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

// MDX detail
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date)
    .locale("ko")
    .format("YYYY년 MM월 DD일");
  return { ...grayMatter, dateString, content, readingMinutes };
};

// MDX 개요 파싱
export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(".mdx", "");

  console.log(filePath);
  const [categoryPath, slug] = filePath.split("/");
  const url = `/blog/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);
  return { url, categoryPath, categoryPublicName, slug };
};

export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split("_")
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(" ");

// 모든 게시물 목록 조회 (블로그 메인에서 사용)
export const getPostList = async (category?: string) => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(
    postPaths.map((postPath) => parsePost(postPath))
  );
  return postList;
};
