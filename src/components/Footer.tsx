import { useCallback } from 'react';

const Footer = () => {
  const getCurrentYear = useCallback(() => {
    const date = new Date();
    return date.getFullYear().toString();
  }, []);

  return (
    <div className="w-3/4 pt-10">
      <p className="text-sm">
        © {getCurrentYear()} Nikola Nenovski. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
