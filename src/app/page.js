import { headers } from "next/headers";
import { isMobile } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Menu, Mic } from "lucide-react";
import VoiceInput from "@/components/voiceInput";
const userAgent = (await headers().get("user-agent")) || "";
const mobileCheck = isMobile(userAgent);

export default function Home() {
  // determine if user is on mobile or desktop
  if (mobileCheck) {
    console.log("in mobile mode");
  } else {
    console.log("not mobile");
    return <div>Please access via mobile phone</div>;
  }
  return (
    <main className="p-2">
      <div className="flex items-center justify-between ">
        <Menu className="text-purple-600 " size={32} />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-2xl font-extrabold capitalize py-4">transcribe</h1>
      <div>
        <Input type="text" placeholder="search" />
      </div>

      <section className="py-4 flex items-baseline justify-between">
        <h2 className="text-xl font-bold capitalize">recent transcriptions</h2>
        <Badge variant="outline">see all</Badge>
      </section>
      <section className="flex items-center justify-center pt-32 cursor-pointer">
        <div className="p-3 ring-1 ring-violet-600 rounded-full">
          <div className="p-3  ring-2 ring-violet-600 rounded-full">
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center">
              <Mic className="text-white" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <VoiceInput />
      </section>
      <section className="flex items-center justify-center pt-8 cursor-pointer">
        <Input
          placeholder="upload file"
          type="file"
          accept="audio/*"
          className="text-purple-600 outline outline-1 outline-purple-600"
        />
      </section>
    </main>
  );
}
