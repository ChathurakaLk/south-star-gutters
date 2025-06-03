import React from "react";

interface SubheadingProps {
  as?: React.ElementType;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Subheading: React.FC<SubheadingProps> = ({
  as: Tag = "h3",
  dark = false,
  children,
  className = "",
}) => {
  return (
    <Tag
      className={
        `text-lg font-semibold mb-1 ` +
        (dark ? "text-zinc-100" : "text-zinc-900") +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </Tag>
  );
};
