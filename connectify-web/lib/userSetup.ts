import { v4 as uuidv4 } from "uuid";
import { createAvatar } from "@dicebear/core";
import { avataaars } from "@dicebear/collection";

export function setupUser() {
  const storedUser = sessionStorage.getItem("user");
  if (storedUser) {
    return JSON.parse(storedUser);
  }

  const userId = uuidv4();
  const userName = `Guest_${Math.floor(Math.random() * 1000)}`;

  const avatarSvg = createAvatar(avataaars, {
    seed: userId,
    size: 128,
    radius: 50,
    accessories: ["kurt", "sunglasses", "round"],
    eyes: ["default", "hearts", "wink", "winkWacky"],
    mouth: ["default", "smile", "twinkle"],
  }).toString();

  const user = { userId, userName, userAvatar: avatarSvg };

  sessionStorage.setItem("user", JSON.stringify(user));

  return user;
}
