import Image from "next/image";
import Link from "next/link";

import logo from "#/public/svg/logo.svg";

export default function AppLogo() {
  return (
    <Link href="/" prefetch={false} style={{ height: 40 }}>
      <Image src={logo} alt="logo" priority={false} />
    </Link>
  );
}
