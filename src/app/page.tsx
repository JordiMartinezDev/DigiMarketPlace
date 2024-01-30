import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-light text-gray-900 sm:text-6xl">
          Welcome to BeTokenized - Your Gateway to Tokenization Without Hassle!
          <span className="text-blue-600"> No Crypto knowledge requried</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          BeTokenized is a user-friendly NFT platform designed for creators of
          all backgrounds, where you can easily tokenize your digital creations
          without any prior crypto or blockchain knowledge. No wallets required!{" "}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products"> Browse popular NFTs</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
