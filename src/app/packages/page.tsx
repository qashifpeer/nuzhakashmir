import { packagesData } from "@/constants/packages"
import Link from "next/link"
import React from 'react'

export default function PackagesPage () {
  return (
    <div className="max-w-4xl mx-auto p-4">
    <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
        <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Our Packages
        </h1>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {packagesData.map((pkg) => (
        <Link
          href={`/packages/${pkg.slug}`}
          key={pkg.slug}
          className="p-4 border rounded-lg hover:shadow"
        >
          <h2 className="text-xl font-semibold">{pkg.slug}</h2>
          <p>{pkg.description}</p>
        </Link>
      ))}
    </div>
  </div>
  )
}
