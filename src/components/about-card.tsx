import { Button } from "@material-tailwind/react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <div className="shadow-none">
      <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900 ">
        <h6 className="mb-4 text-center text-white text-lg font-semibold">
          {subTitle}
        </h6>
        <h4 className="text-center text-white text-2xl font-bold">
          {title}
        </h4>
        <p className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal text-white">
          {description}
        </p>
        <Button color="white" size="sm">
          view details
        </Button>
      </div>
    </div>
  );
}


export default AboutCard;
