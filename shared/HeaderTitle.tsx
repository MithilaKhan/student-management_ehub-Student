export default function HeaderTitle({ title , className }: { title: string , className?: string }) {
  return (
    <h2 className={"md:text-2xl text-[22px] font-medium w-full "+ className}>{title}</h2>
  )
}