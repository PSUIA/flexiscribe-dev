import Image from "next/image";

export default function WelcomeCard({
  name = "Prof. Uia",
  subtitle = "Ready to manage your classes today?",
}) {
  return (
    <div
      className="
        relative
        min-h-[90px]
        w-full
        bg-gradient-to-br from-[#9d8adb] to-[#4c4172]
        rounded-[30px]
        px-6 md:px-10
        flex items-center
        overflow-visible
        shadow-[0_12px_35px_rgba(0,0,0,0.15)]
      "
    >
      {/* TEXT */}
      <div className="z-10">
        <h2 className="text-lg md:text-2xl font-semibold text-white leading-tight">
          Welcome, {name}!
        </h2>

        <p className="text-xs md:text-sm text-white/90 mt-1">
          {subtitle}
        </p>
      </div>

      {/* DESKTOP IMAGE */}
      <div className="hidden md:block absolute right-6 bottom-0">
        <Image
          src="/owl-prof.png"
          alt="Welcome illustration"
          width={200}
          height={300}
          priority
        />
      </div>

      {/* MOBILE IMAGE */}
      <div className="md:hidden absolute right-3 bottom-2">
        <Image
          src="/owl-prof.png"
          alt="Welcome illustration"
          width={90}
          height={120}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
