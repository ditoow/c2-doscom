type StatCardProps = {
  title: string;
  value: number;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="px-4 py-4 sm:px-7 sm:py-6 rounded-lg border border-green bg-green/8 text-green space-y-2 sm:space-y-3">
      <div className="font-normal text-lg sm:text-xl">{title}</div>
      <div className="font-semibold text-3xl sm:text-4xl">{value}</div>
    </div>
  );
}
