'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/logo.svg" 
        alt="S&S Distribution" 
        width={140} 
        height={90}
        className="object-contain"
        priority
      />
    </Link>
  )
}
