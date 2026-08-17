import Image from "next/image";
import { Avatar } from "@material-tailwind/react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <div className="lg:flex-row mb-10 lg:items-end bg-transparent shadow-none flex flex-col lg:flex-row">
      <div className="h-[32rem] max-w-[28rem] shrink-0 overflow-hidden">
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-full lg:col-span-3 p-4 lg:p-0">
        <h6 className="mb-4 text-blue-gray-900 text-lg font-semibold">
          {panel}
        </h6>
        <h2 className="mb-4 font-medium text-blue-gray-900 text-3xl">
          {title}
        </h2>
        <p className="mb-12 md:w-8/12 font-medium text-gray-500">
          {des}
        </p>
        <div className="flex items-center gap-4">
          <Avatar
            variant="circular"
            src="/logos/spotify-logo.png"
            alt="spotify"
            size="lg"
          />
          <div>
            <h6 className="mb-0.5 text-blue-gray-900 text-lg font-semibold">
              {name}
            </h6>
            <p className="font-normal text-gray-500 text-sm">
              {position}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContentCard;
