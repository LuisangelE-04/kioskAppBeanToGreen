import svgPaths from "./svg-totoyy3dvo";
import imgLogo1 from "../assets/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";

function HomeIndicator() {
  return (
    <div className="absolute bottom-[-1px] h-[20px] left-0 right-0" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[7.5px] flex h-[5.5px] items-center justify-center left-[calc(50%+0.5px)] w-[315px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-black h-[5.5px] rounded-[100px] w-[315px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex font-['SF_Pro:Regular',sans-serif] font-normal gap-[8px] items-center leading-[normal] py-[2px] relative shrink-0 text-[12px] text-black" data-name="Left">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon Jun 6
      </p>
    </div>
  );
}

function BatteryIcon() {
  return (
    <div className="h-[12px] relative shrink-0 w-[26.5px]" data-name="Battery Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 12">
        <g id="Battery Icon">
          <g id="Combined Shape" opacity="0.4">
            <mask fill="white" id="path-1-inside-1_1_2292">
              <path d={svgPaths.p303e8640} />
            </mask>
            <path d={svgPaths.p29c93100} fill="var(--stroke-0, black)" mask="url(#path-1-inside-1_1_2292)" />
          </g>
          <rect fill="var(--fill-0, black)" height="8" id="Capacity" rx="1.5" width="20" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center py-[5px] relative shrink-0" data-name="Right">
      <div className="h-[10px] relative shrink-0 w-[16.5px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 10">
          <g id="Combined Shape">
            <path d={svgPaths.p1ced3f00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p44cab80} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3e431e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3a664300} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <div className="h-[10px] relative shrink-0 w-[14.053px]" data-name="Combined Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0534 9.99998">
          <g id="Combined Shape">
            <path d={svgPaths.p263a2c00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p412b251} fill="var(--fill-0, black)" />
            <path d={svgPaths.p31425800} fill="var(--fill-0, black)" />
          </g>
        </svg>
      </div>
      <p className="font-['SF_Pro:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[12px] text-black text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
        100%
      </p>
      <BatteryIcon />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[15px] right-0 top-0" data-name="Status Bar">
      <Left />
      <Right />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[257px] items-center justify-center px-[28px] py-[88px] relative shrink-0 w-[227px]">
      <div className="h-[193.897px] relative shrink-0 w-[217px]" data-name="logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo1} />
      </div>
    </div>
  );
}

function LauncherIcon() {
  return (
    <div className="h-[83px] relative shrink-0 w-[82px]" data-name="Launcher Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 83">
        <g id="Launcher Icon">
          <path d={svgPaths.pe3a7a80} fill="var(--fill-0, white)" id="bg" stroke="var(--stroke-0, #C6C6C6)" />
          <g id="Group">
            <path d={svgPaths.p204f15c0} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.p1bdedef0} fill="var(--fill-0, #FBBC04)" id="Vector_2" />
            <path d={svgPaths.p33f4cc40} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p1d277e80} fill="var(--fill-0, #34A853)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IOs() {
  return (
    <div className="relative shrink-0 size-[83px]" data-name="iOS">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 83">
        <g id="iOS">
          <path d={svgPaths.p2d32bc00} fill="url(#paint0_linear_1_2280)" id="bg" />
          <g id="App Store Icon">
            <path d={svgPaths.p24f6800} fill="var(--fill-0, white)" />
            <path d={svgPaths.pa1df6f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p7f84600} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2280" x1="41.5" x2="41.5" y1="0" y2="83">
            <stop stopColor="#15C7FA" />
            <stop offset="1" stopColor="#216FF0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <LauncherIcon />
      <IOs />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-full">
      <div className="font-['Korto:Book',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#555] text-[28px] text-center w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">Install Bean to Green</p>
        <p>to stay updated and track rewards!</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-center left-[157px] top-[208px] w-[520px]">
      <p className="font-['Korto:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[48px] text-black text-center w-[min-content] whitespace-pre-wrap">See You Soon!</p>
      <Frame />
      <Frame2 />
    </div>
  );
}

export default function LogOut() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="log out">
      <HomeIndicator />
      <StatusBar />
      <div className="-translate-x-1/2 absolute left-1/2 size-[960px] top-[891px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 960">
          <circle cx="480" cy="480" fill="var(--fill-0, #D5E5FF)" id="Ellipse 766" r="480" />
        </svg>
      </div>
      <Frame3 />
    </div>
  );
}