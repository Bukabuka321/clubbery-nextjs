import Image from "next/image";
import Link from "next/link";

const Landing = () => {
	return (
		<div className="flex flex-row justify-evenly items-center text-white mt-36 w-full">
			<div className="flex flex-col gap-y-5 w-2/3">
				<h1 className="text-5xl font-bold leading-[3.75rem]">Dein Ticket in der Hosentasche</h1>
				<p className="text-lg">Entdecke die Welt der Events mit Clubbery: Kaufe Tickets oder präsentiere deine eigenen Events als Veranstalter. Tauche ein in eine Welt voller Möglichkeiten und erlebe unvergessliche Momente mit uns!</p>
				<Link href="/not-found">
					<h3 className="text-xl text-[#CC7503]">Jetzt Erstgespräch sicher &#62;</h3>
				</Link>
				<div className="flex items-center gap-x-5">
					<Image src="/badges/apple-badge.svg" alt="Laden in App Store" width={165} height={60} />
					<Image src="/badges/google-play-badge.png" alt="Laden in Google Play Store" width={165} height={60} />
				</div>
			</div>
			<div>
				<Image src="/iphone_mockup.png" alt="phone" width={900} height={900} />
			</div>
		</div>
	);
};

export default Landing;
