import './globals.scss';
import Dogs, { dogs } from './components/Dogs';

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
          <h2>Looking for the Perfect,</h2>
          <h3>Pure Bred Puppy</h3>
          <h3>from Europe?</h3>
          <button>Puppies for sale</button>
        </div>
      </section>
      <h1 className="breeds">We have the perfect puppy for you!</h1>
      <Dogs />
      <section className="product-section">
        <div className="product-container">
          <div className="product-card">
            <ul className="product-list">
              <li>
                <img
                  src="https://floridafurbabies.com/azure/sunshinestatepups/pups/36f8bcc7-d66e-49f5-9e8f-67abc209b548.png?preset=detail"
                  alt="Shih Poo"
                />

                <p className="product-name">Shih Poo</p>
              </li>

              <li>
                <img
                  src="https://floridafurbabies.com/azure/sunshinestatepups/pups/4d40063f-4502-4537-9f53-c683ee945df1.png?preset=detail"
                  alt="Poodle"
                />
                <p className="product-name">Poodle</p>
              </li>

              <li>
                <img
                  src="https://floridafurbabies.com/azure/sunshinestatepups/pups/fe3300fa-e020-427c-9290-ef8412c1a055.png?preset=detail"
                  alt="Aussiechon"
                />
                <p className="product-name">Aussiechon</p>
              </li>

              <li>
                <img
                  src="https://floridafurbabies.com/azure/sunshinestatepups/pups/94ae280b-ef36-4cf0-8d20-a981b27343c9.jpg?preset=detail"
                  alt="French Bulldog"
                />
                <p className="product-name">French Bulldog</p>
              </li>
              <li>
                <img
                  src="https://floridafurbabies.com/azure/sunshinestatepups/pups/185de450-d783-43a1-b26d-9902ad1e3e66.jpg?preset=detail"
                  alt="Pomeranian"
                />
                <p className="product-name">Pomeranian</p>
              </li>
            </ul>
          </div>
          ;
        </div>
      </section>
    </div>
  );
}
