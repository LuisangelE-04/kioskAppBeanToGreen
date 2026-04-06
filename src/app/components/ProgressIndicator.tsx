export function ProgressIndicator({ currentStep }: { currentStep: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full max-w-[900px]">
      <div className="flex items-center justify-center w-full">
        {/* Step 1 */}
        <div className="shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#CB7701" />
          </svg>
        </div>

        {/* Line 1 */}
        <div className="h-[4px] w-[120px] shrink-0">
          <svg width="120" height="4" viewBox="0 0 120 5" fill="none" preserveAspectRatio="none">
            <path d="M0 2.5H120" stroke="#CB7701" strokeWidth="5" />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            {currentStep >= 2 ? (
              <circle cx="16" cy="16" r="16" fill="#CB7701" />
            ) : (
              <>
                <circle cx="16" cy="16" r="14" fill="#CB7701" />
                <circle cx="16" cy="16" r="14" stroke="#CB7701" strokeWidth="4" />
              </>
            )}
          </svg>
        </div>

        {/* Line 2 */}
        <div className="h-[4px] w-[120px] shrink-0">
          <svg width="120" height="4" viewBox="0 0 120 5" fill="none" preserveAspectRatio="none">
            <path
              d="M0 2.5H120"
              stroke={currentStep >= 3 ? "#CB7701" : "#E5E5E5"}
              strokeWidth="5"
            />
          </svg>
        </div>

        {/* Step 3 */}
        <div className="shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill={currentStep >= 3 ? "#CB7701" : "#E5E5E5"} />
          </svg>
        </div>

        {/* Line 3 */}
        <div className="h-[4px] w-[120px] shrink-0">
          <svg width="120" height="4" viewBox="0 0 120 5" fill="none" preserveAspectRatio="none">
            <path
              d="M0 2.5H120"
              stroke={currentStep >= 4 ? "#CB7701" : "#E5E5E5"}
              strokeWidth="5"
            />
          </svg>
        </div>

        {/* Step 4 */}
        <div className="shrink-0">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill={currentStep >= 4 ? "#CB7701" : "#E5E5E5"} />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-center gap-[35px] font-['Korto:Bold',sans-serif] text-[16px]">
        <p className="w-[100px] text-center text-black">Donate</p>
        <p className="w-[100px] text-center text-black">Measure</p>
        <p className={`w-[100px] text-center ${currentStep >= 3 ? "text-black" : "text-[#e5e5e5]"}`}>
          Dispose
        </p>
        <p className={`w-[100px] text-center ${currentStep >= 4 ? "text-black" : "text-[#e5e5e5]"}`}>
          Impact
        </p>
      </div>
    </div>
  );
}