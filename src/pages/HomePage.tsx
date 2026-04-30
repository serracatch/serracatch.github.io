import { SocialIcon } from 'react-social-icons';
import cartIcon from '../assets/cart-svgrepo-com.svg';
import hero from '../assets/serracatch-large-door.webp';
import '../styles/navgrid.css';

export default function HomePage() {
  return (
    <div>
      <div className='p-2 underline' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <h3>Content Hardware</h3>
      </div>
      <div className='flex-col p-2 gap-2'>
        <div className='flex-center'>
          <img src={hero} style={{ width: 700, maxWidth: '100%' }} />
        </div>
        <div className='flex-center'>
          <a href='https://serracatch.myshopify.com/' className='btn primary'>
            <h2>
              Head to our Shopify store! <CartIcon />
            </h2>
          </a>
        </div>
        <div className='flex-center'>
          <div className='flex-row gap-1'>
            <SocialIcon url='https://www.facebook.com/profile.php?id=61572151408654' />
            <SocialIcon url='mailto:serracatch@gmail.com' />
          </div>
        </div>

        <div className='flex-col gap-2' style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2>The Serra-Catch™ is an easy fix for stubborn doors that refuse to easily close.</h2>

          <p>
            If you have a timber home with wood doors that shift throughout the seasons, forcing you to lift or lean on the door to get it shut, this is for you. I was tired of adjusting my doors throughout the year to get them to latch properly. The slamming and jamming and lifting and leaning had to stop! So I
            invented Serra-Catch.
          </p>
          <hr />

          <h2>How Does It Work?</h2>
          <p>Traditional catch plates provide a single location for your door latch to engage. Serra-Catch has rows of teeth that catch at different positions and cover a greater range vertically. So if your door is warped or droops, there's more locations for it to latch.</p>
          <p>In most cases, install Serra-Catch directly over the existing strike plate to allow old doors to close. It's easy!</p>
          <p>
            Serra-Catch comes in 2 sizes: 80mm and 125mm. Each strike plate also comes with 2 screws. They are designed to go over the original strike plate for easy install. With older door frames, the wood is often weak where the old strike plate was. It is important to screw the new plate into an area with solid
            wood that will hold the plate.
          </p>
          <p>For dark wood finishes, we recommend the black color. For other colors, we recommend grey.</p>
          <hr />
          <h2>Features</h2>
          <ul>
            <li>Easy Install</li>
            <li>Immediately fix doors that are difficult to close</li>
            <li>Built using a tough, eco-friendly thermoplastic</li>
            <li>Made in the U.S.A</li>{' '}
          </ul>
          <hr />
          <h2>Installation</h2>
          <p>Check that there enough space between the door and the jam for Serra-Catch to slide in easily. Place Serra-Catch plate over your existing strike plate. Be sure to align the middle of the teeth with your door latch.</p>
          <p>Use an awl to start a hole where the Serra-Catch screw holes align.</p>
          <p>Use a Phillips Screwdriver and provided screws to attach Serra-Catch to your door jam.</p>
          <p>Your door should now catch easily.</p>
          <hr />
          <h2>Please Note</h2>
          <p>If there is not enough space between the door and the jam to fit Serra-Catch™, you will need to recess the plate into the jam. This requires basic knowledge and skill with a chisel.</p>
          <p>Serra-Catch does NOT accommodate an integrated dead bolt and is not recommended for security doors.</p>
        </div>
        <div className='flex-center'>
          <a href='https://serracatch.myshopify.com/' className='btn primary'>
            <h2>
              Get some! <CartIcon />
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

const CartLink = () => {
  return (
    <a href='https://serracatch.myshopify.com/'>
      <CartIcon />
    </a>
  );
};

const CartIcon = () => {
  return (
    <div style={{ borderRadius: '2000px', backgroundColor: '#fff', display: 'inline-block', width: 50, height: 50, position: 'relative', overflow: 'hidden', verticalAlign: 'middle' }}>
      <img src={cartIcon} style={{ width: '75%', maxHeight: '75%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
    </div>
  );
};
