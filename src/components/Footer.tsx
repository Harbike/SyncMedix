import {
  facebook_icon,
  instagram_icon,
  twitter_icon,
  youtube_icon,
  linkedln_icon,
} from "@/assets";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const { id } = e.target as HTMLImageElement;

    let url = "https://www.youtube.com/SyncMedic/";
    if (id === "instagram") {
      url = "https://www.instagram.com/SyncMedic";
    } else if (id === "linkedin") {
      url = "https://www.linkedin.com/company/SyncMedic";
    } else if (id === "facebook") {
      url = "https://www.facebook.com/share/SyncMedic";
    } else url = "https://x.com/SyncMedic"; //twitter

    window.open(url, "_blank");
  };

  return (
    <div className="w-full border-t-2 py-2">
      <div className="flex justify-between items-center md:justify-evenly py-5 px-3">
        {/* footer navigations */}
        <div>
          <ul className="flex flex-col gap-3">
            <Link to="{/Pulicy>}">
              <li>Privacy Policy</li>
            </Link>
            <Link to="{/Terms>}">
              <li>Terms of Service</li>
            </Link>
            <Link to="{/Settings>}">
              <li>Cookies Settings</li>
            </Link>
          </ul>
        </div>
        {/* social icons */}
        <div className="flex gap-2">
          <img
            src={facebook_icon}
            className="cursor-pointer w-6 h-6"
            id="facebook"
            onClick={handleClick}
          />
          <img
            src={instagram_icon}
            className="cursor-pointer w-6 h-6"
            id="instagram"
            onClick={handleClick}
          />
          <img
            src={twitter_icon}
            className="cursor-pointer w-6 h-6"
            id="twitter"
            onClick={handleClick}
          />
          <img
            src={linkedln_icon}
            className="cursor-pointer w-6 h-6"
            id="linkedln"
            onClick={handleClick}
          />
          <img
            src={youtube_icon}
            className="cursor-pointer w-6 h-6"
            id="youtube"
            onClick={handleClick}
          />
        </div>
      </div>

      <p className="text-xs pt-5 text-center">
        © {currentYear} SyncMedix. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
