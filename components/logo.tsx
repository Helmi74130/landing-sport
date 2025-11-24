import Image from "next/image"
import { cn } from "@/lib/utils"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Logo.png"
      alt="Wii Studio Logo"
      width={60}
      height={40}
      priority
      className={cn("h-auto w-auto", className)}
    />
  )
}

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Logo.png"
      alt="Wii Studio Icon"
      width={36}
      height={36}
      className={cn("h-6 w-auto", className)}
      priority
    />
  )
}
