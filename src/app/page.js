'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-[40px] py-4">Welcome to Product Deals</h1>
      <div className="text-center ">
        <Link href='products'>
          Go to Products
        </Link>
      </div>
    </>
  );
}
