"use client";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useId } from "react";

interface PrivacyTextProps {
  className?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string;
}

export function PrivacyText({
  className = "text-xs text-gray-500",
  checked,
  onCheckedChange,
  error,
}: PrivacyTextProps) {
  const id = useId();

  return (
    <div className={className}>
      <div className="flex items-start space-x-2">
        <Checkbox
          id={`${id}-privacy-consent`}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="mt-0.5 flex-shrink-0"
        />
        <label
          htmlFor={`${id}-privacy-consent`}
          className="cursor-pointer leading-relaxed"
        >
          Даю согласие на обработку персональных данных в соответствии с{" "}
          <Link
            href="/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-600 underline"
          >
            политикой конфиденциальности
          </Link>{" "}
          и{" "}
          <Link
            href="/ad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-600 underline"
          >
            получение рекламных материалов
          </Link>
        </label>
      </div>
      {error && <p className="text-red-500 text-xs mt-1 ml-6">{error}</p>}
    </div>
  );
}
