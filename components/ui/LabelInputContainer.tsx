import { cn } from "@/lib/utils";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default LabelInputContainer;