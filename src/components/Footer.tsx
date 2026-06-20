const Footer = () => {
  return (
    <footer className="space-y-31.75 px-3.75">
      <div className="flex flex-col sm:flex-row">
        <div className="mb-12.5 flex flex-nowrap pr-7.75 sm:mb-0 md:flex-1">
          <img src="/Left_logo.svg" alt="Left Logo" className="h-14.5 w-14.5" />
          <img
            src="/Right_logo.svg"
            alt="Right Logo"
            className="h-14.5 w-14.5"
          />
        </div>
        <div className="navlink flex flex-1 justify-between">
          <div className="max-w-56.75 space-y-15">
            <div className="flex flex-col gap-7.5">
              <span>OFFICE</span>
              <p>
                15 Candyland Lane <br /> 28010 San Francisco
              </p>
            </div>
            <div className="flex flex-col gap-7.5">
              <span>CONTACT</span>
              <div className="flex flex-col">
                <a href="tel:+16465554567">(646) 555-4567</a>
                <a href="mailto:hello@figma.com">hello@figma.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7.5">
            <span>SOCIAL</span>
            <div className="flex flex-col gap-2.5">
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="#">Spotify</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <img src="/Footer_logo.svg" alt="Footer logo" className="w-full" />
    </footer>
  );
};

export default Footer;
