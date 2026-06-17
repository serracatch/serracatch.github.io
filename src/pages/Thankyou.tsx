import '../styles/navgrid.css';

export default function ThankyouPage() {
  return (
    <div>
      <div className='p-2 underline' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <a href='/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3>Content Hardware</h3>
        </a>
      </div>
      <div className='flex-col p-2 gap-2'>
        <div className='flex-col gap-2' style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2>Thank You for Your Purchase!</h2>
          <p>Thank you for choosing the Serra-Catch Easy Close Door Strike Plate Solution. We truly appreciate your support and are confident this product will make your door-closing experience smoother and more reliable.</p>
          <h3>Why Two Sizes Are Included</h3>
          <p>
            Two sizes are provided to ensure the best possible fit and finish. The Serra-Catch should fully cover the existing mortise (the cut-out area in the door frame). In older homes, this area is often adjusted, moved, and re-screwed multiple times over the years. As a result, the wood beneath can become worn,
            damaged, or unattractive. In some cases, the wood may also become too compromised to securely hold screws. That is why the Serra-Catch is designed with a wider option, allowing it to anchor into fresh, solid wood.
          </p>
          <h3>Step-by-Step Installation</h3>
          <ol>
            <li>
              <p>Remove the existing strike plate from your door frame.</p>
            </li>
            <li>
              <p>Align the Serra-Catch strike plate over the existing mortise (cut-out area in the door frame).</p>
            </li>
            <li>
              <p>Check that the latch aligns properly with the opening of the new strike plate.</p>
            </li>
            <li>
              <p>Mark and pre-drill any new screw hole positions if they differ from your existing setup.</p>
            </li>
            <li>
              <p>Secure the strike plate using the provided screws. Do not over-tighten.</p>
            </li>
            <li>
              <p>Test the door by closing it slowly to ensure smooth engagement with the latch.</p>
            </li>
          </ol>

          <h3>Fit Note</h3>
          <p>If there is not enough clearance for the Serra-Catch, you may need to recess it into the door frame using a chisel so it sits flush and the door closes properly.</p>
          <h3>Contact Us</h3>
          <p>If you have any questions, need assistance, or would like to share your experience, we would love to hear from you!</p>
          <p>
            Facebook:{' '}
            <a href='https://www.facebook.com/profile.php?id=61572151408654' target='_blank' rel='noopener noreferrer'>
              https://www.facebook.com/profile.php?id=61572151408654
            </a>
          </p>
          <p>
            Email: <a href='mailto:serracatch@gmail.com'>serracatch@gmail.com</a>
          </p>
          <p>Thank you again for your purchase and for supporting our business!</p>
        </div>
        
      </div>
    </div>
  );
}
