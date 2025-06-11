import Link from "next/link";

interface PrivacyTextProps {
  className?: string;
}

export function PrivacyText({
  className = "text-xs text-gray-500 text-center",
}: PrivacyTextProps) {
  return (
    <p className={className}>
      Нажимая кнопку, вы соглашаетесь с{" "}
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
    </p>
  );
}
