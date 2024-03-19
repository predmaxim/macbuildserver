import {PostType} from '@/types/globals';
import styles from './PostGrid.module.scss';
import {PostCard} from '@/components';

type PostGridProps = {
  posts: PostType[]
}

export const PostGrid = ({posts}: PostGridProps) => {
  return (
    <div className={styles.PostGrid}>
      {posts.map((post) => <PostCard {...post} key={post.id}/>)}
    </div>
  );
};
