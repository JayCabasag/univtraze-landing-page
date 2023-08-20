import { UnivtrazeLogo } from "@/components/shared/icons/UnivtrazeLogo";

export default function Footer() {
  return (
    <div className="h-[90px] flex items-center justify-center gap-2 w-full bg-[#29CC42]">
        <UnivtrazeLogo className="h-[45px] w-[45px]" />
        <h1 className="text-[22px] font-bold">
            UnivTraze
        </h1>
    </div>
  )
}
