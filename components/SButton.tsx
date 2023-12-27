// SocialButton.tsx
import React from "react";

interface SocialButtonProps {
  shareUrl: string;
  shareText: string;
  shareButton: React.ComponentType<{
    url: string;
    quote?: string | undefined;
    children?: React.ReactNode;
  }>;
  shareIcon: React.ComponentType<{ size: number; round?: boolean }>;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  shareUrl,
  shareText,
  shareButton: ShareButton,
  shareIcon,
}) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center rounded-full">
      <ShareButton url={shareUrl} quote={shareText}>
        <button>
          {React.createElement(shareIcon, { size: 32, round: true })}
        </button>
      </ShareButton>
    </div>
  );
};

export default SocialButton;
