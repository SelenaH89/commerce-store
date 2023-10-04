import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div>
          <p>SUBSCRIBE FOR NEWSLETTER</p>
          <input type="email" placeholder="E-MAIL HERE" />
          <button>Submit</button>
        </div>
        <div>
          <p>Contact us now!</p>
          <p>(+43 98765348)</p>
          <p>puppies@gmail.com</p>
        </div>
        <div>
          <p>AT YOUR SERVICE</p>
          <p>MON-Fr</p>
          <p>9h – 18h</p>
        </div>
      </div>
    </div>
  );
}
