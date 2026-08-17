
interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <h1 className="font-bold text-blue-gray-900 text-5xl">
        {count}
      </h1>
      <h6 className="mt-1 font-medium text-blue-gray-900 text-lg">
        {title}
      </h6>
    </div>
  );
}


export default StatsCard;
