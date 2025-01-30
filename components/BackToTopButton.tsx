import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  // State to track scroll position and visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Add event listener for scroll and cleanup
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 rounded-md bg-blue-500 text-white shadow-lg ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out`}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
