function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green Ring */}
      <circle cx="12" cy="12" r="10" fill="none" stroke="#006A4E" strokeWidth="3" />
      {/* Red Inside Area */}
      <circle cx="12" cy="12" r="5" fill="#F42A41" />
    </svg>
  )
}

export default Logo
