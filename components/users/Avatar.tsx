import styles from "@/components/users/Avatar.module.css";
import { cn } from "@/lib/utils";
import Image from "next/image";

const IMAGE_SIZE = 48;

export function Avatar({
  name,
  otherStyles,
}: {
  otherStyles: string;
  name: string;
}) {
  return (
    <div
      className={cn(styles.avatar, otherStyles, "h-9 w-9")}
      data-tooltip={name}
    >
      <Image
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(
          Math.random() * 30
        )}.png`}
        fill
        className={styles.avatar_picture}
        alt={name}
      />
    </div>
  );
}
