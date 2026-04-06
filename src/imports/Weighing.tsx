import svgPaths from "./svg-u9cqp80jjb";
import imgImage from "figma:asset/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";

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
    <div className="content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[8px] items-center leading-[normal] py-[2px] relative shrink-0 text-[12px] text-black" data-name="Left">
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
      <p className="font-['SF_Pro:Medium',sans-serif] font-[510] leading-[14px] relative shrink-0 text-[12px] text-black text-right" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Image() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Image">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[106.11%] left-[1.13%] max-w-none top-[9.17%] w-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[10px] overflow-clip top-[27px] w-[19px]" data-name="Container">
      <Image />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.77%_6.12%_-2.23%_10.2%]" data-name="Group">
      <Container1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[2.31%_6.12%_-2.23%_10.2%]">
      <div className="absolute inset-[22.46%_11.25%_3.15%_12.97%]">
        <div className="absolute inset-[-3.1%_-4.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.1412 51.3526">
            <path d={svgPaths.p72c4c00} fill="var(--fill-0, white)" id="Vector 13" stroke="var(--stroke-0, #CB7701)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <Group />
      <div className="absolute inset-[2.31%_8.99%_84.27%_10.25%]">
        <div className="absolute inset-[-17.19%_-3.8%_-17.19%_-3.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.5885 11.7267">
            <path d={svgPaths.p962ee00} fill="var(--fill-0, white)" id="Vector 12" stroke="var(--stroke-0, #CB7701)" strokeLinecap="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[65px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-center justify-center relative shrink-0 w-[49px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-[calc(50%+0.5px)] top-0">
      <Container />
      <p className="font-['Korto:Book',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[18px] text-black text-center w-[87px] whitespace-pre-wrap">
        <span className="font-['Korto:Bold',sans-serif] leading-[normal]">10 Cups</span>
        <span className="leading-[normal]">{` Donated`}</span>
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[120px] relative shrink-0 w-[82px]">
      <Frame2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-center justify-center px-[28px] py-[88px] relative shrink-0 w-[171px]">
      <div className="h-[115px] relative shrink-0 w-[129px]" data-name="logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[195px] items-center justify-center px-[28px] py-[88px] relative shrink-0 w-[193px]">
      <Frame1 />
    </div>
  );
}

function Vector() {
  return (
    <div className="h-[67.125px] relative shrink-0 w-[47.867px]" data-name="Vector">
      <div className="absolute inset-[-2.23%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.863 70.1213">
          <g id="Vector">
            <path d={svgPaths.pbda4800} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.pbda4800} id="Vector_3" stroke="var(--stroke-0, #60B010)" strokeWidth="2.99634" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SOpportunity1() {
  return (
    <div className="content-stretch flex flex-col h-[83px] items-center justify-center relative shrink-0" data-name="s-opportunity">
      <Vector />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-0 top-0">
      <SOpportunity1 />
      <p className="font-['Korto:Book',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-[18px] text-black text-center w-[80px] whitespace-pre-wrap">
        <span className="font-['Korto:Bold',sans-serif] leading-[normal]">{`20 Bulbs `}</span>
        <span className="leading-[normal]">Lit</span>
      </p>
    </div>
  );
}

function SOpportunity() {
  return (
    <div className="h-[136px] overflow-clip relative shrink-0 w-[80px]" data-name="s-opportunity">
      <Frame3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[144px] h-[187px] items-center justify-center px-[86px] relative shrink-0 w-[834px]">
      <Group3 />
      <Frame />
      <SOpportunity />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 767">
            <circle cx="16" cy="16" fill="var(--fill-0, #D39D52)" r="16" />
            <circle cx="16" cy="16" fill="var(--fill-1, #CB7701)" r="16" />
          </g>
        </svg>
      </div>
      <div className="h-0 relative shrink-0 w-[155px]">
        <div className="absolute inset-[-2.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 5">
            <g id="Vector 39">
              <path d="M0 2.5H155" stroke="var(--stroke-0, #D39D52)" strokeWidth="5" />
              <path d="M0 2.5H155" stroke="var(--stroke-1, #CB7701)" strokeWidth="5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 767">
            <circle cx="16" cy="16" fill="var(--fill-0, #D39D52)" r="14" />
            <circle cx="16" cy="16" fill="var(--fill-1, #CB7701)" r="14" />
            <circle cx="16" cy="16" r="14" stroke="var(--stroke-0, #D39D52)" strokeWidth="4" />
            <circle cx="16" cy="16" r="14" stroke="var(--stroke-1, #CB7701)" strokeWidth="4" />
          </g>
        </svg>
      </div>
      <div className="h-0 relative shrink-0 w-[156px]">
        <div className="absolute inset-[-2.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 5">
            <g id="Vector 39">
              <path d="M0 2.5H156" stroke="var(--stroke-0, #D39D52)" strokeWidth="5" />
              <path d="M0 2.5H156" stroke="var(--stroke-1, #CB7701)" strokeWidth="5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 767">
            <circle cx="16" cy="16" fill="var(--fill-0, #888888)" r="16" />
            <circle cx="16" cy="16" fill="var(--fill-1, #E5E5E5)" r="16" />
          </g>
        </svg>
      </div>
      <div className="h-0 relative shrink-0 w-[155px]">
        <div className="absolute inset-[-2.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 5">
            <g id="Vector 39">
              <path d="M0 2.5H155" stroke="var(--stroke-0, #888888)" strokeWidth="5" />
              <path d="M0 2.5H155" stroke="var(--stroke-1, #E5E5E5)" strokeWidth="5" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[32px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 767">
            <circle cx="16" cy="16" fill="var(--fill-0, #888888)" r="16" />
            <circle cx="16" cy="16" fill="var(--fill-1, #E5E5E5)" r="16" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Korto:Bold',sans-serif] gap-[53px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[18px] text-center whitespace-pre-wrap">
      <p className="h-[24px] relative shrink-0 text-black w-[131px]">Donate</p>
      <p className="h-[24px] relative shrink-0 text-black w-[131px]">Measure</p>
      <p className="h-[24px] relative shrink-0 text-[#e5e5e5] w-[131px]">Impact</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center p-[10px] relative shrink-0 w-[664px]">
      <Frame4 />
      <Frame10 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0">
      <Frame9 />
      <Frame6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[322px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 322 322">
          <g id="Ellipse 766">
            <circle cx="161" cy="161" fill="var(--fill-0, #D39D52)" r="161" />
            <circle cx="161" cy="161" fill="var(--fill-1, #CB7701)" r="161" />
          </g>
        </svg>
      </div>
      <p className="-translate-x-1/2 col-1 font-['Korto:Bold',sans-serif] ml-[161px] mt-[132px] not-italic relative row-1 text-[0px] text-black text-center w-[249px] whitespace-pre-wrap">
        <span className="leading-[normal] text-[48px]">{`0.0 `}</span>
        <span className="leading-[normal] text-[32px]">grams</span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[463px]">
      <p className="font-['Korto:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[28px] text-black text-center w-[min-content] whitespace-pre-wrap">Weighing...</p>
      <Group2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[50px] h-[1151px] items-center left-1/2 py-[50px] top-[24px] w-[664px]">
      <Frame8 />
      <Frame5 />
      <p className="font-['Korto:Book',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center w-[509px] whitespace-pre-wrap">Allow Bean to Green a few seconds to measure your contribution.</p>
    </div>
  );
}

export default function Weighing() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="Weighing">
      <HomeIndicator />
      <StatusBar />
      <Frame7 />
    </div>
  );
}