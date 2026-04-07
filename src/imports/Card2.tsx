import svgPaths from "./svg-0jego0jrb6";
import imgImage from "../assets/5b28d5f77d7fb3f8fc35de94d42b9f3e93d2436d.png";
import imgImagePolarBears from "../assets/74334ba36969c307f876a2078f8ac6ab94fe26bc.png";
import { imgEllipse774 } from "./svg-avvst";

function Heading() {
  return (
    <div className="absolute h-[24px] left-[115.02px] top-[-0.8px] w-[90.363px]" data-name="Heading">
      <p className="-translate-x-1/2 absolute font-['Korto:Bold',sans-serif] leading-[24px] left-[45.5px] not-italic text-[24px] text-black text-center top-[-0.6px]">Your Impact</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[8.88px] top-[35.2px] w-[303.113px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[152px] not-italic text-[16px] text-black text-center top-[-0.6px]">Making a difference, one cup at a time</p>
    </div>
  );
}

function ImpactPage1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[320.6px]" data-name="ImpactPage2">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Vector() {
  return (
    <div className="h-[83.3px] relative shrink-0 w-[59.401px]" data-name="Vector">
      <div className="absolute inset-[-1.8%_-2.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.3972 86.2961">
          <g id="Vector">
            <path d={svgPaths.p26883500} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p26883500} id="Vector_3" stroke="var(--stroke-0, #60B010)" strokeWidth="2.99634" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SOpportunity() {
  return (
    <div className="content-stretch flex flex-col h-[103px] items-center justify-center relative shrink-0 w-[71px]" data-name="s-opportunity">
      <Vector />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Korto:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#60b010] text-[16px] text-center">23</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[34px] relative shrink-0" data-name="Paragraph">
      <p className="font-['Korto:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center">LED Bulbs Lit</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center justify-center relative shrink-0" data-name="Frame1">
      <SOpportunity />
      <Text />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-[12px] top-[4px] w-[134.088px]" data-name="Paragraph">
      <p className="absolute font-['Korto:Book',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-0.6px]">Major Contributor</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(69,144,0,0.8)] h-[32px] overflow-clip relative rounded-[18px] shrink-0 w-[158.088px]" data-name="Badge2">
      <Paragraph2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-center relative shrink-0" data-name="Frame2">
      <ImpactPage1 />
      <Frame1 />
      <Badge />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[66.65px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_0.5%_0.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.3143 66.3143">
          <path d={svgPaths.pf24d700} fill="var(--fill-0, #D0DFF6)" id="Ellipse 773" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[479.08px] size-[66.65px] top-[-1140.91px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[1.61%_3.59%_3.15%_2.63%]">
      <div className="absolute inset-[19.25%_6.21%_3.15%_5.79%]">
        <div className="absolute inset-[-2.09%_-2.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5541 24.6555">
            <path d={svgPaths.p142d0600} fill="var(--fill-0, white)" id="Vector 13" stroke="var(--stroke-0, #CB7701)" strokeLinecap="round" strokeWidth="0.987324" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[1.61%_3.59%_84.38%_2.63%]">
        <div className="absolute inset-[-11.56%_-2.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.641 5.25897">
            <path d={svgPaths.p32213400} fill="var(--fill-0, white)" id="Vector 12" stroke="var(--stroke-0, #CB7701)" strokeLinecap="round" strokeWidth="0.987324" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[30.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[30.5px] items-start left-[-0.3px] top-[-0.49px] w-[18.825px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[8.875px] relative shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[7.675px] items-start left-[3.92px] overflow-clip top-[12.01px] w-[9.95px]" data-name="Container">
      <Image />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[29.525px] left-[503.14px] top-[-1121.06px] w-[18.15px]" data-name="Group">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Group1">
      <Container />
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[15.68px] size-[66.65px] top-[16px]" data-name="Icon">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[-479.075px] pr-[545.725px] pt-[1140.912px] relative size-full">
          <Group1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-[3px] top-0 w-[41px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[20.8px] not-italic text-[#cb7701] text-[16px] text-center top-[-0.6px]">8.7</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[13.4px] top-[24px] w-[19.238px]" data-name="Text1">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[10px] not-italic text-[16px] text-black text-center top-[-0.6px]">kg</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[54px] left-[26.5px] top-0 w-[47px]" data-name="Container">
      <Paragraph3 />
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[14.6px] top-[55.26px]" data-name="Container1">
      <p className="font-['Korto:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[70px] whitespace-pre-wrap">Grounds Donated</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[110px] left-[-1px] top-[90.65px] w-[100px]" data-name="Frame">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[210px] left-[0.4px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] top-[0.09px] w-[98px]" data-name="Container2">
      <Icon />
      <Frame />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[66.65px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[0_0.5%_0.5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.3143 66.3143">
          <path d={svgPaths.pf24d700} fill="var(--fill-0, #D0DFF6)" id="Ellipse 773" />
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[589.65px] size-[66.65px] top-[-1141px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[24.212px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[1.78%_2.5%_4.91%_2.47%]" data-name="Vector">
        <div className="absolute inset-[-1.94%_-2.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9797 23.4684">
            <path d={svgPaths.p1b82c680} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #60B010)" strokeWidth="0.874722" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SOpportunity1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24.212px] items-start left-[613.79px] top-[-1119.13px] w-[18px]" data-name="SOpportunity1">
      <Icon5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Group3">
      <Container7 />
      <SOpportunity1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[16px] size-[66.65px] top-[16px]" data-name="Icon1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[-589.65px] pr-[656.3px] pt-[1141px] relative size-full">
          <Group3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-[12.46px] top-[-0.6px] w-[41.862px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[21px] not-italic text-[#60b010] text-[16px] text-center top-[-0.6px]">2,340</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-[16.84px] top-[23.4px] w-[31.413px]" data-name="Text2">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-black text-center top-[-0.6px]">kWh</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[46px] left-[15.6px] top-[91px] w-[67px]" data-name="Container3">
      <Paragraph4 />
      <Text2 />
    </div>
  );
}

function Container9() {
  return <div className="absolute h-[24px] left-[5.53px] top-[165.45px] w-[88.338px]" data-name="Container4" />;
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] h-[209.875px] left-[118.4px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] top-0 w-[98.65px]" data-name="Container5">
      <Icon3 />
      <Container8 />
      <Container9 />
      <div className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[49.1px] not-italic text-[16px] text-black text-center top-[146px] whitespace-nowrap">
        <p className="mb-0">Power</p>
        <p>Generated</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute contents inset-[0_0.49%_0.49%_0]" data-name="Icon">
      <div className="absolute inset-[0_0.49%_0.49%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[66.352px_66.352px]" style={{ maskImage: `url('${imgEllipse774}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.3516 66.3516">
          <path d={svgPaths.p29b37bc0} fill="var(--fill-0, #D0DFF6)" id="Ellipse 774" />
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.49%_0.49%_0]" data-name="Clip path group">
      <Icon8 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[66.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[66.675px] top-0" data-name="Icon2">
      <Icon7 />
    </div>
  );
}

function ImagePolarBears() {
  return (
    <div className="absolute left-[13.34px] size-[40px] top-[13.34px]" data-name="ImagePolarBears">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImagePolarBears} />
    </div>
  );
}

function Ellipse() {
  return (
    <div className="h-[66.675px] relative shrink-0 w-full" data-name="Ellipse">
      <Icon6 />
      <ImagePolarBears />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.587px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[14px] not-italic text-[#007aff] text-[16px] text-center top-[-0.6px]">892</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[19.238px]" data-name="Text3">
      <p className="-translate-x-1/2 absolute font-['Korto:Book',sans-serif] leading-[24px] left-[10px] not-italic text-[16px] text-black text-center top-[-0.6px]">kg</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container6">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[19px] relative w-full">
          <Paragraph5 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container7">
      <p className="font-['Korto:Book',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[81px] whitespace-pre-wrap">Methane Prevented</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col gap-[8px] h-[210px] items-center justify-center left-[237px] px-[16px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(208,223,246,0.4)] top-0 w-[99px]" data-name="Container8">
      <Ellipse />
      <Container11 />
      <Container12 />
    </div>
  );
}

function ImpactPage() {
  return (
    <div className="h-[210px] relative shrink-0 w-[337px]" data-name="ImpactPage1">
      <Container2 />
      <Container6 />
      <Container10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0 w-full" data-name="Frame3">
      <Frame2 />
      <ImpactPage />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[24px] shadow-[0px_0px_11.54px_0px_rgba(154,221,88,0.39),0px_0px_23.08px_0px_rgba(154,221,88,0.29)] size-full" data-name="Card2">
      <Frame3 />
    </div>
  );
}