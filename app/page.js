import './globals.scss';
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
            <button>Puppies for sale</button>
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
                  alt="Shih Poo"
                />

                <p className="product-name">Shih Poo</p>
              </li>

              <li>
                <Image
                  src="/images/02.jpg"
                  width={200}
                  height={100}
                  alt="Poodle"
                />
                <p className="product-name">Poodle</p>
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
                  alt="French Bulldog"
                />
                <p className="product-name">French Bulldog</p>
              </li>
              <li>
                <Image
                  src="/images/05.jpg"
                  width={200}
                  height={100}
                  alt="Pomeranian"
                />
                <p className="product-name">Pomeranian</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
