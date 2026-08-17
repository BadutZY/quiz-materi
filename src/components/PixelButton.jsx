import PixelIcon from "./PixelIcon.jsx";

export default function PixelButton({
  children,
  onClick,
  variant = "primary", // primary | secondary | ghost
  size = "md", // md | sm | icon
  icon,
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) {
  const variantClass = variant === "secondary" ? "pixel-btn-secondary" : variant === "ghost" ? "pixel-btn-ghost" : "";
  const sizeClass = size === "sm" ? "pixel-btn-sm" : size === "icon" ? "pixel-btn-icon" : "";

  return (
    <button
      type={type}
      className={`pixel-btn ${variantClass} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <PixelIcon name={icon} size={size === "sm" ? 16 : 20} />}
      {children}
    </button>
  );
}
