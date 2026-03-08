type StatCardProps = {
  title: string;
  value: number;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="py-6 px-7 rounded-lg border border-green bg-green/8 text-green space-y-3">
      <div className="font-normal text-xl">{title}</div>
      <div className="font-semibold text-4xl">{value}</div>
    </div>
  );
}
