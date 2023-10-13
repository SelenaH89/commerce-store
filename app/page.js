import './globals.scss';
import 'bulma/css/bulma.min.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="featured">
        <div className="featured-bg">
          <img
            className="puppy-image"
            src="https://media-be.chewy.com/wp-content/uploads/2021/02/26154509/puppy-stages-1024x615.jpg"
            alt="puppie"
          />
        </div>
        <div className="featured-content">
          <h1>Search for the perfect dog is over !</h1>
          <p className="featured-text">
            We have puppies that come from a long line of champion bloodlines.
            <br />
            These puppies have been by licensed breeders,
            <br /> and are extremely socialized and healthy.
          </p>
          <Link href="/dogs">
            <button className="btn">Puppies for sale</button>
          </Link>
        </div>
      </section>
      <h1 className="breeds">We have the perfect puppy for you!</h1>

      <section className="product-section">
        <div className="product-container">
          <div className="product-card">
            <ul className="product-list">
              <li>
                <Image
                  src="/images/01.jpg"
                  width={200}
                  height={100}
                  alt="American Akita"
                />

                <p className="product-name">American Akita</p>
              </li>

              <li>
                <Image
                  src="/images/02.jpg"
                  width={200}
                  height={100}
                  alt="American Stafford"
                />
                <p className="product-name">American Stafford</p>
              </li>

              <li>
                <Image
                  src="/images/03.jpg"
                  width={200}
                  height={100}
                  alt="Aussiechon"
                />
                <p className="product-name">Aussiechon</p>
              </li>

              <li>
                <Image
                  src="/images/04.jpg"
                  width={200}
                  height={100}
                  alt="Cane Corso"
                />
                <p className="product-name">Cane Corso</p>
              </li>
              <li>
                <Image
                  src="/images/05.jpg"
                  width={200}
                  height={100}
                  alt=" Dogue de Bordeaux "
                />
                <p className="product-name"> Dogue de Bordeaux </p>
              </li>
              <li>
                <Image
                  src="/images/06.jpg"
                  width={200}
                  height={100}
                  alt="German Shepherd"
                />
                <p className="product-name"> German Shepherd</p>
              </li>
              <li>
                <Image
                  src="/images/07.jpg"
                  width={200}
                  height={100}
                  alt="Golden Retriever"
                />
                <p className="product-name"> Golden Retriever</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
