import styles from './Footer.module.scss';
import fb from '/public/icons/fb.svg';
import insta from '/public/icons/insta.svg';
import twitter from '/public/icons/twitter.svg';
import linkedin from '/public/icons/linkedin.svg';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className={styles.Footer} id="contact">
      <div className={styles.icons}>
        <Link href="#">
          <Image src={fb} alt="facebook" className={styles.icons__item}/>
        </Link>
        <Link href="#">
          <Image src={insta} alt="instagram" className={styles.icons__item}/>
        </Link>
        <Link href="#">
          <Image src={twitter} alt="twitter" className={styles.icons__item}/>
        </Link>
        <Link href="#">
          <Image src={linkedin} alt="linkedin" className={styles.icons__item}/>
        </Link>
      </div>
      <p>
        Copyright &copy;2020 All rights reserved
      </p>
    </footer>
  );
};
