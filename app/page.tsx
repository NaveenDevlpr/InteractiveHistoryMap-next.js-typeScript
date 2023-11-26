"use client"
import dynamic from "next/dynamic"
const MapsApp=dynamic(()=>import("./components/MapApp"),{ssr:false})

const defailtPosition:[number,number]=[51.505,-0.09]

export default function Home() {
  return (
    <main className="w-full h-full">
      <MapsApp/>
    </main>
  )
}
