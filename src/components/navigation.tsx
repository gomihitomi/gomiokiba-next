import { navigationItems } from "@/constants/navigation";
import Link from "next/link";

const navigation = [
  navigationItems.ABOUT,
  navigationItems.PROFILE,
  navigationItems.GOODS,
  navigationItems.GUIDELINE,
  navigationItems.FAQ,
  navigationItems.LINK,
];

export const Navigation = () => (
  <nav>
    <ul className="flex justify-around gap-px">
      {navigation.map((item) => (
        <li key={item.id} className="flex-1">
          <Link
            className="text-sm py-2 w-full h-full flex justify-center items-center text-background bg-foreground hover:text-foreground hover:bg-background"
            href={`#${item.id}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
