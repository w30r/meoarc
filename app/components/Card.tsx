import React from "react";

interface CardProps {
  /**
   * The main content of the card.
   */
  children?: React.ReactNode;
  /**
   * An optional title for the card.
   */
  title?: string;
  /**
   * An optional description or subtitle for the card.
   */
  description?: string;
  /**
   * Source URL for an optional image at the top of the card.
   */
  imageSrc?: string;
  /**
   * Alt text for the card image. Required if imageSrc is provided.
   */
  imageAlt?: string;
  /**
   * Optional ReactNode for actions (e.g., buttons) at the bottom of the card.
   */
  actions?: React.ReactNode;
  /**
   * Additional CSS classes to apply to the card container.
   */
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  imageSrc,
  imageAlt,
  actions,
  className,
}) => {
  return (
    <div
      className={`bg-background text-foreground w-xl rounded-lg shadow-lg overflow-auto border border-gray-200 ${className || ""}`}
    >
      {/* {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || "Card image"}
          className="w-full h-48 object-cover"
        />
      )} */}
      <div className="p-6">
        {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
        {description && <p className=" text-foreground mb-4">{description}</p>}
        {children}
      </div>
      {actions && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

export default Card;
