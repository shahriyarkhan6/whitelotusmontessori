interface LogoSVGProps {
  className?: string;
}

export default function LogoSVG({ className = "" }: LogoSVGProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Thin line-art lotus — olive-green */}
      <svg
        width="36"
        height="30"
        viewBox="0 0 44 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-olive-green flex-shrink-0"
        aria-hidden="true"
      >
        {/* Center petal */}
        <path
          d="M22 31 C21 25 19 18 19 13.5 C19 9.5 20.5 7.5 22 7.5 C23.5 7.5 25 9.5 25 13.5 C25 18 23 25 22 31 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Left inner petal */}
        <path
          d="M22 31 C19 25 15 21 13 17 C11 13 12.5 9.5 15 10 C17 10.5 19 15.5 22 31 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Right inner petal */}
        <path
          d="M22 31 C25 25 29 21 31 17 C33 13 31.5 9.5 29 10 C27 10.5 25 15.5 22 31 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Left outer petal */}
        <path
          d="M16 27 C11.5 22.5 7.5 18 6.5 14 C5.5 10.5 7.5 7.5 10.5 8.5 C13 9.5 14.5 16 16 27 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Right outer petal */}
        <path
          d="M28 27 C32.5 22.5 36.5 18 37.5 14 C38.5 10.5 36.5 7.5 33.5 8.5 C31 9.5 29.5 16 28 27 Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* Water line */}
        <path
          d="M7 33.5 Q22 29.5 37 33.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Text lockup */}
      <div className="flex flex-col leading-none">
        <span className="font-heading text-olive-green text-xl font-semibold tracking-wide">
          WHITE LOTUS
        </span>
        <span
          className="font-sans text-powder-pink text-[0.6rem] uppercase tracking-[0.18em] mt-1"
        >
          MONTESSORI SCHOOL
        </span>
      </div>
    </div>
  );
}
