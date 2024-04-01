"use client";
import useMobileDetect from "@/helpers/detetctUseOS";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	const device = useMobileDetect();
	console.log("🚀 ~ Header ~ device:", device.isDesktop());
	return (
		<div className="bg-[#181923] sticky top-0 flex flex-row justify-between items-center w-full text-white py-4 px-10">
			<div>
				<Image src="/clubbery_logo.png" alt="Clubbery Logo Image" width={45} height={50} />
			</div>
			<ul className="flex flex-row justify-between items-center list-none gap-x-12 text-base">
				<li>
					<Link href="/not-found">So funktioniert Clubbery</Link>
				</li>
				<li>
					<Link href="/not-found">Creator werden</Link>
				</li>
				<li>
					<Link href="/not-found">FAQ</Link>
				</li>
				<li className="px-5 py-3 rounded-2xl bg-[#CC7503] text-[#F0FDF4]">
					<Link href="/not-found">Download Clubbery</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
