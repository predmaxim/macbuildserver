import styles from './HomePage.module.scss';
import {Button, PostGrid, WorkGrid} from '@/components';
import img1 from '/public/home-page_heroSection_img.png';
import Image from 'next/image';
import posts from '@/mocks/posts.json';
import works from '@/mocks/works.json';
import Link from 'next/link';
import {redirect} from 'next/navigation';

const HomePage = () => {

  const onClickResumeBtn = () => {
    redirect('/Predybailo_Maxim_Resume.pdf');
  };

  return (
    <>
      <section className={`${styles.heroSection} `}>
        <div className={styles.leftSide}>
          <h1 className={styles.h1}>
            Hi, I am John, Creative Technologist
          </h1>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <Button tag="a" href="/Predybailo_Maxim_Resume.pdf" target="_blank">
            Download Resume
          </Button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.circle}>
            <Image
              src={img1}
              alt="The man smiles"
              className={styles.heroImg}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.recentPostsSection} full-width content-grid`}>
        <div className={styles.recentPostsSection__header}>
          <h2>Recent posts</h2>
          <Link href="#" className={`${styles['view-all-link']} view-all-link`}>View all</Link>
        </div>
        <PostGrid posts={posts}/>
      </section>

      <section className={`${styles.featuredWorksSection} `}>
        <h2 className={styles.featuredWorksSection__header}>Featured works</h2>
        <WorkGrid works={works}/>
      </section>
    </>
  );
};
export default HomePage;
