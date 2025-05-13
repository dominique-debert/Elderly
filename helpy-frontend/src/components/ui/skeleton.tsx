export const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`animate-pulse rounded bg-base-300 ${className}`} />
  );
};