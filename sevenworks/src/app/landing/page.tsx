import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 p-4 ${lato.className}`}>
            <div className="col-span-1 md:col-span-2">
                <p className="font-bold text-white text-3xl">
                    Sevenworks
                </p>
            </div>
            <div className="col-span-1">
                <p className="text-black-700 ml-16 mt-8 text-2xl">
                    Focus on your future, not on <br />
                    the formatting.
                </p>
            </div>
            <div className="col-span-1">
            </div>
        </div>
    );
}