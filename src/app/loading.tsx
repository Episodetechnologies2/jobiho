import Image from "next/image";
import { asset } from "@/lib/basePath";

export default function Loading() {
  return (
    <div className="jobiho-loading-screen">
      <div className="jobiho-loading-center jobiho-loading-fadein">
        <div className="jobiho-logo-rotate">
          <Image
            src={asset("/jobiho%20only%20logo.png")}
            alt="Jobiho"
            width={120}
            height={120}
            priority
            style={{ width: 'auto', height: 'auto' }}
            className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>
    </div>
  );
}
