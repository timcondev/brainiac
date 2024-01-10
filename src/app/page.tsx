import TypewriterTitle from '@/components/ui/TypewriterTitle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen grainy from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center my-10">
          Use <span className="text-green-600 font-bold">AI</span> to help
          visually organize and expand on your notes!
        </h1>
        <div className="semi-bold text-2xl text-center">
          Our app will quickly generate a{' '}
          <span className="text-green-500 font-bold">
            visual representation
          </span>{' '}
          for your note. Then, when called up, provide{' '}
          <span className=" text-green-500 font-bold">
            AI generated content
          </span>{' '}
          to help expand your own ideas!
        </div>
        <h2 className="font-semibold text-3xl text-center text-slate-700 my-10">
          <TypewriterTitle />
        </h2>
        <div className="mt-8"></div>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button className="bg-green-600 text-4xl p-7 outline-8 hover:bg-black">
              Get Started
              <ArrowRight className="ml-2 w-7 h-7" strokeWidth={4} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
