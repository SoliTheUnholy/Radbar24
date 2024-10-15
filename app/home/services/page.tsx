import { AutoCarousel } from "@/components/autoCarousel";
import { Card } from "@/components/ui/card";
export default function services() {
  return (
    <div className="mx-4 grid gap-4 sm:mx-12 xl:mx-24">
      <div className="relative mt-4 h-auto animate-fade-in-left overflow-hidden rounded-xl">
        <div className="h-[20vh]">
          <AutoCarousel />
        </div>
      </div>
      <div className="">
        <Card className="grid animate-fade-in-up gap-2 border-none bg-muted/75 p-4 lg:p-8">
          <h2 className="text-lg font-black text-foreground">خدمات</h2>
          <div
            className={`flex justify-center gap-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8`}
          ></div>
        </Card>
      </div>
    </div>
  );
}
