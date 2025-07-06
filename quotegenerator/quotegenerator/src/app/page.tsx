import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col row-start-2">
      <div className="nav-bar w-full h-20 flex items-center justify-center">
        <Image
          src="/s&s-log-no-bg.png"
          alt="Description of image"
          width={130}
          height={30}
        />
      </div>
      <div className="sm:p-0 md:p-8 mt-4">
        <Card className="p-8 bg-[#1b3172] border-[#1b3172] rounded-none md:rounded-lg flex flex-col items-center gap-4 md:block">
          <div className="flex flex-row items-center gap-2 mb-8">
            <i className="iconoir-hand-cash text-white font-bold text-4xl"></i>
            <h2 className="text-2xl font-bold">Quote generator</h2>
          </div>
          <div id="doors" className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="doors">Doors</Label>
            <Input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              id="doors"
              placeholder="0"
            />
          </div>
          <div id="windows" className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="windows">Windows</Label>
            <Input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              id="windows"
              placeholder="0"
            />
          </div>
          <div
            id="kitchens"
            className="grid w-full max-w-sm items-center gap-3"
          >
            <Label htmlFor="kitchens">kitchens</Label>
            <Input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              id="kitchens"
              placeholder="0"
            />
          </div>
        </Card>
      </div>
    </main>
  );
}
