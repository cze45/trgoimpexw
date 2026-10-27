export function Brand({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={`brand ${inverse ? "brand-inverse" : ""}`}>
      <svg className="brand-mark" viewBox="0 0 198 112" fill="none" aria-hidden="true">
        <path
          d="M17 11H137L116 34H74V88L47 106V34H0L17 11Z"
          fill={inverse ? "#FEFEFE" : "#1B2E3C"}
        />
        <path
          d="M80 41H108L126 69L147 38L169 70L187 41H216L176 112H157L146 92L132 112H113L80 54Z"
          transform="translate(-18 -2)"
          fill={inverse ? "#FEFEFE" : "#6B0F1A"}
        />
      </svg>
      {!compact && (
        <span className="brand-name">
          TRGOIMPEX<span>W</span>
        </span>
      )}
    </span>
  );
}
