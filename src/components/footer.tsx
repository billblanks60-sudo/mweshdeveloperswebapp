import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["About Us", "Services", "Team", "Blog", "Contact"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-slate-50">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 max-w-6xl mx-auto rounded-2xl p-5 shadow-xl">
          <Typography className="text-2xl md:text-3xl text-center font-bold" color="white">
            Build something remarkable with us.
          </Typography>
          <Typography color="white" className="md:w-7/12 text-center my-3 !text-base text-blue-100">
            We design premium digital experiences for businesses ready to grow with confidence.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md" className="text-indigo-700 font-semibold">
              Book a Consultation
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center !justify-between">
          <h6 className="text-gray-900 font-bold text-lg">
            Mwesh Developers Global
          </h6>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>

        <Typography color="blue-gray" className="text-center mt-12 font-normal !text-gray-700">
          &copy; {CURRENT_YEAR} Mwesh Developers Global. Crafted for premium digital growth.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
