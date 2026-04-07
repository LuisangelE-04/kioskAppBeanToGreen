import imgLogo from "../../assets/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";

export function BeanToGreenLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img
        src={imgLogo}
        alt="Bean to Green"
        className="w-[129px] h-auto mb-2"
      />
    </div>
  );
}
