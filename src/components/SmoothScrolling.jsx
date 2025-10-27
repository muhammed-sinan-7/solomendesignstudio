// components/SmoothScrolling.jsx
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.1,           // Smoothness (0.1 = very smooth)
    duration: 1.2,       // Duration of scroll
    smoothTouch: false,  // Disable on mobile for better performance
    smooth: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
