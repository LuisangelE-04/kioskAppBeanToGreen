import svgPaths from "./svg-tfbqk71vgk";
import imgLogo1 from "figma:asset/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";

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

function LogIn() {
  return (
    <div className="absolute bg-[#cb7701] content-stretch flex h-[60px] items-center justify-center left-[117px] px-[62px] rounded-[30px] top-[880px] w-[600px]" data-name="Log In">
      <p className="font-['Korto:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white">Log In</p>
    </div>
  );
}

function CreateNewAccount() {
  return (
    <div className="absolute bg-[#60b010] content-stretch flex h-[60px] items-center justify-center left-[117px] px-[62px] rounded-[30px] top-[960px] w-[600px]" data-name="Create New Account">
      <p className="font-['Korto:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white">Create New Account</p>
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

function Group() {
  return (
    <div className="h-[67.867px] relative w-[38.026px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0261 67.8666">
        <g id="Group 2">
          <g id="Vector 13">
            <path d={svgPaths.p2d35af00} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p2d35af00} fill="var(--fill-1, #CB7701)" />
          </g>
          <g id="Vector 12">
            <path d={svgPaths.p15246a00} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p15246a00} fill="var(--fill-1, #CB7701)" />
          </g>
        </g>
      </svg>
      <div className="-translate-y-1/2 absolute aspect-[123/95] left-[21.69%] right-[23.6%] top-[calc(50%+0.92px)]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.79%] left-[-0.04%] max-w-none top-0 w-[100.09%]" src={imgLogo1} />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[323.674px] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 w-[234.884px]">
      <div className="col-1 flex h-[25.937px] items-center justify-center ml-[104.76px] mt-0 relative row-1 w-[22.046px]">
        <div className="-scale-y-100 flex-none h-[22.635px] rotate-[-169.08deg] skew-x-[1.99deg] w-[18.874px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.884 22.6254">
              <path d={svgPaths.p3b46e640} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[320.146px] items-center justify-center ml-0 mt-[3.58px] relative row-1 w-[234.289px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-168.28deg] skew-x-[2.13deg]">
          <div className="h-[285.4px] relative w-[190.744px]">
            <div className="absolute inset-[0.52%_0_2.1%_1.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187.347 277.923">
                <path d={svgPaths.p3dd78600} fill="var(--fill-0, white)" id="Vector 25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[21.24px] items-center justify-center ml-[139.18px] mt-[10.26px] relative row-1 w-[17.976px]">
        <div className="-scale-y-100 flex-none h-[18.551px] rotate-[-169.08deg] skew-x-[1.99deg] w-[15.375px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.383 18.5432">
              <path d={svgPaths.p3b057c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[25.937px] items-center justify-center ml-[137.3px] mt-[8.18px] relative row-1 w-[22.046px]">
        <div className="-scale-y-100 flex-none h-[22.635px] rotate-[-169.08deg] skew-x-[1.99deg] w-[18.874px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.884 22.6254">
              <path d={svgPaths.p3b46e640} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[18.983px] items-center justify-center ml-[53.83px] mt-[43.17px] relative row-1 w-[16.065px]">
        <div className="-scale-y-100 flex-none h-[16.58px] rotate-[-169.08deg] skew-x-[1.99deg] w-[13.74px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.7476 16.5731">
              <path d={svgPaths.p3e520c00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[2.992px] items-center justify-center ml-[61.46px] mt-[65.93px] relative row-1 w-[9.637px]">
        <div className="-scale-y-100 flex-none h-[1.181px] rotate-[-169.08deg] skew-x-[2.1deg] w-[9.63px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-33.15%_-4.06%_-33.14%_-4.06%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4179 1.96309">
                <path d={svgPaths.p3581d40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.782443" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.61px] items-center justify-center ml-[101.19px] mt-[30.21px] relative row-1 w-[7.287px]">
        <div className="-scale-y-100 flex-none h-[7.52px] rotate-[-169.08deg] skew-x-[1.99deg] w-[6.233px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.23605 7.51714">
              <path d={svgPaths.p327cee80} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.394px] items-center justify-center ml-[85.03px] mt-[26.39px] relative row-1 w-[7.104px]">
        <div className="-scale-y-100 flex-none h-[7.331px] rotate-[-169.08deg] skew-x-[1.99deg] w-[6.076px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.07925 7.32813">
              <path d={svgPaths.p20920e00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[7.687px] items-center justify-center ml-[103.77px] mt-[26.7px] relative row-1 w-[6.517px]">
        <div className="-scale-y-100 flex-none h-[6.044px] rotate-[-155.05deg] skew-x-[4.2deg] w-[4.826px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-6.16%_-7.84%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.53599 6.83654">
                <path d={svgPaths.pe8cf6e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.561px] items-center justify-center ml-[84.76px] mt-[21.07px] relative row-1 w-[6.498px]">
        <div className="-scale-y-100 flex-none h-[5.566px] rotate-[-102.4deg] skew-x-[2.71deg] w-[5.231px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-6.64%_-7.26%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.91439 6.40078">
                <path d={svgPaths.p21e23ea0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[69.418px] items-center justify-center ml-[21.3px] mt-[71.72px] relative row-1 w-[39.314px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "1526" } as React.CSSProperties}>
        <div className="flex-none rotate-[-1.67deg] scale-x-99 scale-y-101 skew-x-[-0.31deg]">
          <Group />
        </div>
      </div>
      <div className="col-1 flex h-[99.023px] items-center justify-center ml-[27.37px] mt-[78.07px] relative row-1 w-[143.51px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-168.28deg] skew-x-[2.13deg]">
          <div className="h-[72.793px] relative w-[134.186px]">
            <div className="absolute inset-[2.37%_0.86%_0_2.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.405 71.0717">
                <path d={svgPaths.pb8eae80} fill="var(--fill-0, #D9D9D9)" id="Vector 26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[328.617px] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1 w-[258.725px]">
      <div className="col-1 flex h-[99.023px] items-center justify-center ml-[44.34px] mt-[70.78px] relative row-1 w-[143.51px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-168.28deg] skew-x-[2.13deg]">
          <div className="h-[72.793px] relative w-[134.186px]">
            <div className="absolute inset-[2.37%_0.86%_0_2.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.405 71.0717">
                <path d={svgPaths.p2ca07700} fill="var(--fill-0, #CFCFCF)" id="Vector 26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[125.97px] items-center justify-center ml-[22.59px] mt-[170.21px] relative row-1 w-[203.165px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-168.28deg] skew-x-[2.13deg]">
          <div className="h-[88.113px] relative w-[192.505px]">
            <div className="absolute inset-[0.68%_7.15%_6.43%_0.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.033 81.8477">
                <path d={svgPaths.p3fcfed00} fill="var(--fill-0, #D9D9D9)" id="Vector 27" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[47.967px] items-center justify-center ml-[188.77px] mt-[194.05px] relative row-1 w-[22.222px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.41deg] skew-x-[1.18deg]">
          <div className="h-[46.004px] relative w-[18.193px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1931 46.0043">
              <ellipse cx="9.09656" cy="23.0021" fill="var(--fill-0, #939393)" id="Ellipse 707" rx="9.09656" ry="23.0021" />
            </svg>
          </div>
        </div>
      </div>
      <Group3 />
      <div className="col-1 flex h-[51.962px] items-center justify-center ml-[159.79px] mt-[223.61px] relative row-1 w-[30.908px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[11.72deg] skew-x-[2.13deg]">
          <div className="h-[47.874px] relative w-[23.425px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4249 47.8737">
              <ellipse cx="11.7124" cy="23.9369" fill="var(--fill-0, #D9D9D9)" id="Ellipse 706" rx="11.7124" ry="23.9369" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[38.34px] mt-0 relative row-1">
      <Group6 />
      <div className="col-1 flex h-[10.059px] items-center justify-center ml-[160.01px] mt-[251.06px] relative row-1 w-[8.573px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-32.61deg] skew-x-[-5.09deg]">
          <div className="h-[7.736px] relative w-[5.934px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93437 7.73555">
              <ellipse cx="2.96719" cy="3.86778" fill="var(--fill-0, #939393)" id="Ellipse 762" rx="2.96719" ry="3.86778" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[9.307px] items-center justify-center ml-[164.22px] mt-[243.8px] relative row-1 w-[7.426px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.54deg] skew-x-[-2.95deg]">
          <div className="h-[7.872px] relative w-[5.816px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81602 7.87221">
              <ellipse cx="2.90801" cy="3.9361" fill="var(--fill-0, #939393)" id="Ellipse 763" rx="2.90801" ry="3.9361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.986px] items-center justify-center ml-[171.66px] mt-[241.97px] relative row-1 w-[5.233px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.33deg] skew-x-[-0.8deg]">
          <div className="h-[6.633px] relative w-[4.838px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83786 6.6331">
              <ellipse cx="2.41893" cy="3.31655" fill="var(--fill-0, #939393)" id="Ellipse 764" rx="2.41893" ry="3.31655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.472px] items-center justify-center ml-[177.69px] mt-[245.11px] relative row-1 w-[5.163px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.54deg] skew-x-[2.95deg]">
          <div className="h-[5.474px] relative w-[4.044px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04399 5.47369">
              <ellipse cx="2.02199" cy="2.73685" fill="var(--fill-0, #939393)" id="Ellipse 765" rx="2.02199" ry="2.73685" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[67.98px] relative w-[37.95px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.9503 67.9801">
        <g id="Group 2">
          <g id="Vector 13">
            <path d={svgPaths.p2d9cd800} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p2d9cd800} fill="var(--fill-1, #CB7701)" />
          </g>
          <g id="Vector 12">
            <path d={svgPaths.p2b2519f0} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p2b2519f0} fill="var(--fill-1, #CB7701)" />
          </g>
        </g>
      </svg>
      <div className="-translate-y-1/2 absolute aspect-[123/95] left-[21.69%] right-[23.6%] top-[calc(50%+0.86px)]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.79%] left-[-0.04%] max-w-none top-0 w-[100.09%]" src={imgLogo1} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 flex h-[25.002px] items-center justify-center ml-[128.99px] mt-0 relative row-1 w-[20.765px]">
        <div className="-scale-y-100 flex-none h-[24.718px] rotate-[179.2deg] skew-x-[-0.15deg] w-[20.487px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.487 24.7183">
              <path d={svgPaths.p207dd300} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[311.8px] items-center justify-center ml-0 mt-[9.05px] relative row-1 w-[206.936px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[311.8px] relative w-[206.936px]">
            <div className="absolute inset-[0.52%_0_2.1%_1.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203.274 303.629">
                <path d={svgPaths.p32a02500} fill="var(--fill-0, white)" id="Vector 25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[20.49px] items-center justify-center ml-[150.99px] mt-[16.35px] relative row-1 w-[16.917px]">
        <div className="-scale-y-100 flex-none h-[20.258px] rotate-[179.2deg] skew-x-[-0.15deg] w-[16.689px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6889 20.2585">
              <path d={svgPaths.p34eb0c00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[25.002px] items-center justify-center ml-[148.96px] mt-[14.08px] relative row-1 w-[20.765px]">
        <div className="-scale-y-100 flex-none h-[24.718px] rotate-[179.2deg] skew-x-[-0.15deg] w-[20.487px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.487 24.7183">
              <path d={svgPaths.p207dd300} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[18.313px] items-center justify-center ml-[58.4px] mt-[52.3px] relative row-1 w-[15.118px]">
        <div className="-scale-y-100 flex-none h-[18.106px] rotate-[179.2deg] skew-x-[-0.15deg] w-[14.915px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9146 18.1061">
              <path d={svgPaths.p3f372a00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[3.807px] items-center justify-center ml-[67.71px] mt-[77.18px] relative row-1 w-[9.434px]">
        <div className="-scale-y-100 flex-none h-[3.676px] rotate-[179.2deg] skew-x-[-0.04deg] w-[9.387px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-10.64%_-4.17%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.1693 4.45878">
                <path d={svgPaths.p3a79a700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.782443" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.306px] items-center justify-center ml-[109.78px] mt-[38.14px] relative row-1 w-[6.858px]">
        <div className="-scale-y-100 flex-none h-[8.212px] rotate-[179.2deg] skew-x-[-0.15deg] w-[6.765px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.76542 8.21249">
              <path d={svgPaths.p14830f00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.097px] items-center justify-center ml-[92.25px] mt-[33.97px] relative row-1 w-[6.685px]">
        <div className="-scale-y-100 flex-none h-[8.006px] rotate-[179.2deg] skew-x-[-0.15deg] w-[6.595px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59531 8.00599">
              <path d={svgPaths.pfdd00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[7.733px] items-center justify-center ml-[112.58px] mt-[34.31px] relative row-1 w-[6.322px]">
        <div className="-scale-y-100 flex-none h-[6.648px] rotate-[-166.55deg] skew-x-[2.43deg] w-[5.194px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-5.64%_-7.22%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.94421 7.39784">
                <path d={svgPaths.p37bbac80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[7.967px] items-center justify-center ml-[91.96px] mt-[28.16px] relative row-1 w-[7.617px]">
        <div className="-scale-y-100 flex-none h-[6.139px] rotate-[-112.16deg] skew-x-[4.41deg] w-[5.636px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-6.11%_-6.65%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.38645 6.889">
                <path d={svgPaths.p239d7700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[76.345px] items-center justify-center ml-[20.58px] mt-[92.36px] relative row-1 w-[51.345px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "1526" } as React.CSSProperties}>
        <div className="flex-none rotate-[-15.25deg] skew-x-[-2.73deg]">
          <Group1 />
        </div>
      </div>
      <div className="col-1 flex h-[79.527px] items-center justify-center ml-[29.7px] mt-[90.44px] relative row-1 w-[145.576px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[79.527px] relative w-[145.576px]">
            <div className="absolute inset-[2.37%_0.86%_0_2.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.389 77.6389">
                <path d={svgPaths.p3d4bb100} fill="var(--fill-0, #D9D9D9)" id="Vector 26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-[44.33px] relative row-1">
      <div className="col-1 flex h-[79.527px] items-center justify-center ml-[48.1px] mt-[82.47px] relative row-1 w-[145.576px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[79.527px] relative w-[145.576px]">
            <div className="absolute inset-[2.37%_0.86%_0_2.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.389 77.6389">
                <path d={svgPaths.p3d4bb100} fill="var(--fill-0, #CFCFCF)" id="Vector 26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[96.264px] items-center justify-center ml-[24.5px] mt-[191.1px] relative row-1 w-[208.846px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[96.264px] relative w-[208.846px]">
            <div className="absolute inset-[0.68%_7.14%_6.43%_0.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192.093 89.4165">
                <path d={svgPaths.p2ac42c00} fill="var(--fill-0, #D9D9D9)" id="Vector 27" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[51.945px] items-center justify-center ml-[204.79px] mt-[217.15px] relative row-1 w-[23.457px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-5.32deg] skew-x-[-0.98deg]">
          <div className="h-[50.258px] relative w-[19.739px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7387 50.2577">
              <ellipse cx="9.86933" cy="25.1289" fill="var(--fill-0, #939393)" id="Ellipse 707" rx="9.86933" ry="25.1289" />
            </svg>
          </div>
        </div>
      </div>
      <Group4 />
      <div className="col-1 h-[52.302px] ml-[173.35px] mt-[249.44px] relative row-1 w-[25.413px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4133 52.3021">
          <ellipse cx="12.7067" cy="26.1511" fill="var(--fill-0, #939393)" id="Ellipse 706" rx="12.7067" ry="26.1511" />
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[67.247px] relative w-[38.435px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4354 67.2471">
        <g id="Group 2">
          <g id="Vector 13">
            <path d={svgPaths.p2ef0ac00} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p2ef0ac00} fill="var(--fill-1, #CB7701)" />
          </g>
          <g id="Vector 12">
            <path d={svgPaths.p2a51200} fill="var(--fill-0, #D39D52)" />
            <path d={svgPaths.p2a51200} fill="var(--fill-1, #CB7701)" />
          </g>
        </g>
      </svg>
      <div className="-translate-y-1/2 absolute aspect-[123/95] left-[21.69%] right-[23.6%] top-[calc(50%+1.23px)]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[115.79%] left-[-0.04%] max-w-none top-0 w-[100.09%]" src={imgLogo1} />
        </div>
      </div>
    </div>
  );
}

function Layer() {
  return (
    <div className="relative size-full" data-name="Layer_3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.0429 117.939">
        <g id="Layer_3">
          <path d={svgPaths.p1ba5f400} fill="var(--fill-0, #95C069)" id="Vector" />
          <path d={svgPaths.p20035300} fill="var(--fill-0, #459000)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[26.15px] mt-0 relative row-1">
      <div className="col-1 flex h-[24.757px] items-center justify-center ml-[115.52px] mt-0 relative row-1 w-[20.562px]">
        <div className="flex-none h-[24.476px] rotate-[0.8deg] skew-x-[0.15deg] w-[20.286px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2859 24.4756">
              <path d={svgPaths.p25e600c0} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 h-[303.76px] ml-0 mt-[4.71px] relative row-1 w-[209.695px]">
        <div className="absolute inset-[0_0.48%_2.13%_1.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.056 297.28">
            <path d={svgPaths.p38160200} fill="var(--fill-0, white)" id="Vector 25" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[20.288px] items-center justify-center ml-[149.51px] mt-[6.96px] relative row-1 w-[16.751px]">
        <div className="flex-none h-[20.06px] rotate-[0.8deg] skew-x-[0.15deg] w-[16.525px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5251 20.0596">
              <path d={svgPaths.p1b6e4800} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.757px] items-center justify-center ml-[147.5px] mt-[4.71px] relative row-1 w-[20.562px]">
        <div className="flex-none h-[24.476px] rotate-[0.8deg] skew-x-[0.15deg] w-[20.286px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2859 24.4756">
              <path d={svgPaths.p25e600c0} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[18.133px] items-center justify-center ml-[57.83px] mt-[42.55px] relative row-1 w-[14.97px]">
        <div className="flex-none h-[17.928px] rotate-[0.8deg] skew-x-[0.15deg] w-[14.768px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7682 17.9284">
              <path d={svgPaths.p20141780} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[1.421px] items-center justify-center ml-[66.02px] mt-[67.18px] relative row-1 w-[10.366px]">
        <div className="flex-none h-[1.277px] rotate-[0.8deg] skew-x-[0.04deg] w-[10.351px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-30.64%_-3.78%_-30.63%_-3.78%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1332 2.05963">
                <path d={svgPaths.p36c2d418} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.782443" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.537px] items-center justify-center ml-[110.52px] mt-[33.03px] relative row-1 w-[5.397px]">
        <div className="flex-none h-[6.463px] rotate-[0.8deg] skew-x-[0.15deg] w-[5.324px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32402 6.46277">
              <path d={svgPaths.p1a6c5b00} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[5.872px] items-center justify-center ml-[93.85px] mt-[28.21px] relative row-1 w-[4.848px]">
        <div className="flex-none h-[5.805px] rotate-[0.8deg] skew-x-[0.15deg] w-[4.782px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.78237 5.80528">
              <path d={svgPaths.p3276d500} fill="var(--fill-0, #090909)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.782443" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[79.509px] items-center justify-center ml-[10.51px] mt-[77.58px] relative row-1 w-[59.851px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "1526" } as React.CSSProperties}>
        <div className="flex-none rotate-[26.74deg] skew-x-[4.43deg]">
          <Group2 />
        </div>
      </div>
      <div className="col-1 flex h-[6.678px] items-center justify-center ml-[114.12px] mt-[29.55px] relative row-1 w-[5.189px]">
        <div className="flex-none h-[6.61px] rotate-[-0.77deg] skew-x-[-0.14deg] w-[5.117px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-5.67%_-7.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.8674 7.35987">
                <path d={svgPaths.p16526100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.49px] items-center justify-center ml-[93.92px] mt-[20.32px] relative row-1 w-[7.694px]">
        <div className="flex-none h-[6.218px] rotate-[-49.3deg] scale-y-99 skew-x-[-5.87deg] w-[5.243px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-6.03%_-7.15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.99303 6.96803">
                <path d={svgPaths.p358b1670} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[109.938px] items-center justify-center ml-[18.85px] mt-[79.43px] relative row-1 w-[155.686px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[13.12deg] skew-x-[2.37deg]">
          <div className="h-[78.436px] relative w-[144.842px]">
            <div className="absolute inset-[2.36%_0.86%_0_2.7%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.682 76.5825">
                <path d={svgPaths.p19a85400} fill="var(--fill-0, #D9D9D9)" id="Vector 26" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[86.043px] items-center justify-center ml-[44.75%] mt-[20.36%] relative row-1 w-[117.939px]">
        <div className="-scale-y-100 flex-none h-[117.939px] rotate-90 w-[86.043px]">
          <Layer />
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-0 mt-0 relative row-1">
      <div className="col-1 h-[78.746px] ml-[39.28px] mt-[72.43px] relative row-1 w-[144.147px]">
        <div className="absolute inset-[2.37%_0.86%_0_2.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.011 76.8769">
            <path d={svgPaths.p59b3ba0} fill="var(--fill-0, #CFCFCF)" id="Vector 28" />
          </svg>
        </div>
      </div>
      <div className="col-1 h-[95.319px] ml-0 mt-[179.99px] relative row-1 w-[206.796px]">
        <div className="absolute inset-[0.68%_7.14%_6.43%_0.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190.208 88.5388">
            <path d={svgPaths.p3b03c2c0} fill="var(--fill-0, #D9D9D9)" id="Vector 29" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex h-[51.436px] items-center justify-center ml-[5.05px] mt-[205.78px] relative row-1 w-[23.227px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-174.68deg] skew-x-[0.98deg]">
          <div className="h-[49.764px] relative w-[19.545px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5449 49.7644">
              <ellipse cx="9.77246" cy="24.8822" fill="var(--fill-0, #939393)" id="Ellipse 708" rx="9.77246" ry="24.8822" />
            </svg>
          </div>
        </div>
      </div>
      <Group5 />
      <div className="col-1 flex h-[51.789px] items-center justify-center ml-[34.24px] mt-[237.76px] relative row-1 w-[25.164px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[51.789px] relative w-[25.164px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.1639 51.7888">
              <ellipse cx="12.5819" cy="25.8944" fill="var(--fill-0, #939393)" id="Ellipse 709" rx="12.5819" ry="25.8944" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[211.39px] mt-[60.16px] relative row-1">
      <Group7 />
      <div className="col-1 flex h-[11.029px] items-center justify-center ml-[55.65px] mt-[237.15px] relative row-1 w-[9.4px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-147.39deg] skew-x-[5.09deg]">
          <div className="h-[8.482px] relative w-[6.507px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50702 8.48201">
              <ellipse cx="3.25351" cy="4.241" fill="var(--fill-0, #939393)" id="Ellipse 742" rx="3.25351" ry="4.241" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[10.059px] items-center justify-center ml-[24.27px] mt-[208.57px] relative row-1 w-[8.573px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-147.39deg] skew-x-[5.09deg]">
          <div className="h-[7.736px] relative w-[5.934px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93437 7.73555">
              <ellipse cx="2.96719" cy="3.86778" fill="var(--fill-0, #939393)" id="Ellipse 743" rx="2.96719" ry="3.86778" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[10.205px] items-center justify-center ml-[52.3px] mt-[229.2px] relative row-1 w-[8.142px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-163.46deg] skew-x-[2.95deg]">
          <div className="h-[8.632px] relative w-[6.377px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.37725 8.63185">
              <ellipse cx="3.18862" cy="4.31592" fill="var(--fill-0, #939393)" id="Ellipse 744" rx="3.18862" ry="4.31592" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[9.307px] items-center justify-center ml-[21.22px] mt-[201.32px] relative row-1 w-[7.426px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-163.46deg] skew-x-[2.95deg]">
          <div className="h-[7.872px] relative w-[5.816px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81602 7.87221">
              <ellipse cx="2.90801" cy="3.9361" fill="var(--fill-0, #939393)" id="Ellipse 745" rx="2.90801" ry="3.9361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[7.66px] items-center justify-center ml-[46.54px] mt-[227.19px] relative row-1 w-[5.737px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-175.67deg] skew-x-[0.8deg]">
          <div className="h-[7.273px] relative w-[5.305px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3047 7.27317">
              <ellipse cx="2.65235" cy="3.63659" fill="var(--fill-0, #939393)" id="Ellipse 746" rx="2.65235" ry="3.63659" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.986px] items-center justify-center ml-[15.96px] mt-[199.49px] relative row-1 w-[5.233px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-175.67deg] skew-x-[0.8deg]">
          <div className="h-[6.633px] relative w-[4.838px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83786 6.6331">
              <ellipse cx="2.41893" cy="3.31655" fill="var(--fill-0, #939393)" id="Ellipse 747" rx="2.41893" ry="3.31655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[7.096px] items-center justify-center ml-[40px] mt-[230.63px] relative row-1 w-[5.661px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[163.46deg] skew-x-[-2.95deg]">
          <div className="h-[6.002px] relative w-[4.434px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.43422 6.00189">
              <ellipse cx="2.21711" cy="3.00094" fill="var(--fill-0, #939393)" id="Ellipse 748" rx="2.21711" ry="3.00094" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.472px] items-center justify-center ml-[10px] mt-[202.63px] relative row-1 w-[5.163px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[163.46deg] skew-x-[-2.95deg]">
          <div className="h-[5.474px] relative w-[4.044px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04399 5.47369">
              <ellipse cx="2.02199" cy="2.73685" fill="var(--fill-0, #939393)" id="Ellipse 749" rx="2.02199" ry="2.73685" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group10 />
      <Group8 />
      <Group11 />
      <div className="col-1 flex h-[10.059px] items-center justify-center ml-[230.02px] mt-[232.58px] relative row-1 w-[8.573px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-32.61deg] skew-x-[-5.09deg]">
          <div className="h-[7.736px] relative w-[5.934px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93437 7.73555">
              <ellipse cx="2.96719" cy="3.86778" fill="var(--fill-0, #939393)" id="Ellipse 762" rx="2.96719" ry="3.86778" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[9.307px] items-center justify-center ml-[234.22px] mt-[225.33px] relative row-1 w-[7.426px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.54deg] skew-x-[-2.95deg]">
          <div className="h-[7.872px] relative w-[5.816px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81602 7.87221">
              <ellipse cx="2.90801" cy="3.9361" fill="var(--fill-0, #939393)" id="Ellipse 763" rx="2.90801" ry="3.9361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.986px] items-center justify-center ml-[241.67px] mt-[223.5px] relative row-1 w-[5.233px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.33deg] skew-x-[-0.8deg]">
          <div className="h-[6.633px] relative w-[4.838px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83786 6.6331">
              <ellipse cx="2.41893" cy="3.31655" fill="var(--fill-0, #939393)" id="Ellipse 764" rx="2.41893" ry="3.31655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.472px] items-center justify-center ml-[247.7px] mt-[226.64px] relative row-1 w-[5.163px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.54deg] skew-x-[2.95deg]">
          <div className="h-[5.474px] relative w-[4.044px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04399 5.47369">
              <ellipse cx="2.02199" cy="2.73685" fill="var(--fill-0, #939393)" id="Ellipse 765" rx="2.02199" ry="2.73685" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[10.059px] items-center justify-center ml-[198.35px] mt-[262.14px] relative row-1 w-[8.573px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-32.61deg] skew-x-[-5.09deg]">
          <div className="h-[7.736px] relative w-[5.934px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93437 7.73555">
              <ellipse cx="2.96719" cy="3.86778" fill="var(--fill-0, #939393)" id="Ellipse 762" rx="2.96719" ry="3.86778" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[9.307px] items-center justify-center ml-[202.55px] mt-[254.88px] relative row-1 w-[7.426px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.54deg] skew-x-[-2.95deg]">
          <div className="h-[7.872px] relative w-[5.816px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81602 7.87221">
              <ellipse cx="2.90801" cy="3.9361" fill="var(--fill-0, #939393)" id="Ellipse 763" rx="2.90801" ry="3.9361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.986px] items-center justify-center ml-[210px] mt-[253.05px] relative row-1 w-[5.233px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.33deg] skew-x-[-0.8deg]">
          <div className="h-[6.633px] relative w-[4.838px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83786 6.6331">
              <ellipse cx="2.41893" cy="3.31655" fill="var(--fill-0, #939393)" id="Ellipse 764" rx="2.41893" ry="3.31655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.472px] items-center justify-center ml-[216.03px] mt-[256.19px] relative row-1 w-[5.163px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.54deg] skew-x-[2.95deg]">
          <div className="h-[5.474px] relative w-[4.044px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.04399 5.47369">
              <ellipse cx="2.02199" cy="2.73685" fill="var(--fill-0, #939393)" id="Ellipse 765" rx="2.02199" ry="2.73685" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[10.059px] items-center justify-center ml-[168.35px] mt-[291.69px] relative row-1 w-[8.573px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-32.61deg] skew-x-[-5.09deg]">
          <div className="h-[7.736px] relative w-[5.934px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.93437 7.73555">
              <ellipse cx="2.96719" cy="3.86778" fill="var(--fill-0, #939393)" id="Ellipse 762" rx="2.96719" ry="3.86778" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[9.307px] items-center justify-center ml-[172.55px] mt-[284.44px] relative row-1 w-[7.426px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-16.54deg] skew-x-[-2.95deg]">
          <div className="h-[7.872px] relative w-[5.816px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.81602 7.87221">
              <ellipse cx="2.90801" cy="3.9361" fill="var(--fill-0, #939393)" id="Ellipse 763" rx="2.90801" ry="3.9361" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[6.986px] items-center justify-center ml-[180px] mt-[282.61px] relative row-1 w-[5.233px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.33deg] skew-x-[-0.8deg]">
          <div className="h-[6.633px] relative w-[4.838px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.83786 6.6331">
              <ellipse cx="2.41893" cy="3.31655" fill="var(--fill-0, #939393)" id="Ellipse 764" rx="2.41893" ry="3.31655" />
            </svg>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[8.007px] items-center justify-center ml-[185.57px] mt-[284.35px] relative row-1 w-[6.388px]" style={{ "--transform-inner-width": "1184.796875", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-[16.54deg] skew-x-[2.95deg]">
          <div className="h-[6.773px] relative w-[5.004px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00367 6.77266">
              <ellipse cx="2.50184" cy="3.38633" fill="var(--fill-0, #939393)" id="Ellipse 761" rx="2.50184" ry="3.38633" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[368px] items-end relative shrink-0 w-[451px]">
      <div className="h-[253px] relative shrink-0 w-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector 38" />
        </svg>
      </div>
      <Group9 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-start flex flex-wrap gap-[40px] h-[628px] items-start justify-center left-[calc(50%+0.5px)] px-[140px] top-[115px] w-[485px]">
      <Frame />
      <Frame2 />
    </div>
  );
}

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

export default function ScreenSaver() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] size-full" data-name="screen saver">
      <StatusBar />
      <div className="-translate-x-1/2 absolute left-1/2 size-[1098px] top-[412px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1098 1098">
          <circle cx="549" cy="549" fill="var(--fill-0, #D5E5FF)" id="Ellipse 766" r="549" />
        </svg>
      </div>
      <LogIn />
      <CreateNewAccount />
      <Frame1 />
      <HomeIndicator />
    </div>
  );
}