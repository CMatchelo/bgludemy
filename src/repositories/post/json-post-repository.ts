import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const TIME_SIM = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (TIME_SIM < 0) return;

    await new Promise(resolve => setTimeout(resolve, TIME_SIM));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedContent = JSON.parse(jsonContent);
    const { posts } = parsedContent;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);
    if (!post) throw new Error(`Post with id ${id} not found`);
    return post;
  }
}

export const postRepository = new JsonPostRepository();
