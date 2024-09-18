import { AutoCarousel } from "@/components/autoCarousel";

export default function Home() {
  return (
    <div>
      <AutoCarousel />
      <div className="absolute right-1/4 top-1/2 grid">
        <h1 className="text-7xl font-bold text-slate-100">رادبار 24</h1>
        <h2 className="text-xl text-slate-400">شرکت حمل و نقل</h2>
      </div>
    </div>
  );
}
