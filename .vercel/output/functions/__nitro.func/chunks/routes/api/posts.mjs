import { d as defineEventHandler } from '../../runtime.mjs';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import 'node:http';
import 'node:https';

const postsDir = path.join(process.cwd(), "content");
const posts = defineEventHandler((event) => {
  const fileNames = fs.readdirSync(postsDir);
  const posts = fileNames.map((fileName) => {
    const id = fileName.replace(/.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterInfo = matter(fileContents);
    const fileInfo = fs.statSync(fullPath);
    return {
      id,
      title: matterInfo.data.title,
      date: fileInfo.ctime
    };
  });
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.sort((a, b) => a.date < b.date ? 1 : -1);
      resolve(posts);
    }, 1500);
  });
});

export { posts as default };
//# sourceMappingURL=posts.mjs.map
