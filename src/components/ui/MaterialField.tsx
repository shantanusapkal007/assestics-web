import React from "react";
import { cn } from "@/lib/utils";

type MaterialFieldProps = {
  variant?: "hero" | "bridge" | "services" | "process" | "dark" | "footer";
  className?: string;
};

const contourSets = {
  hero: ["M-80 412 C84 286 174 506 347 373 S646 200 777 357 S1046 456 1254 252 S1538 120 1700 240", "M-80 484 C97 350 217 575 391 444 S665 271 818 428 S1115 518 1323 321 S1543 221 1700 308", "M-80 556 C116 426 267 649 451 515 S739 347 862 497 S1154 585 1381 393 S1584 321 1700 377"],
  bridge: ["M-70 210 C126 116 206 315 373 222 S628 95 788 202 S1041 313 1208 165 S1518 73 1690 160", "M-70 260 C128 166 251 366 425 272 S687 147 842 253 S1097 367 1262 216 S1530 124 1690 210"],
  services: ["M900 -80 C800 110 1100 84 1014 278 S1208 457 1063 604 S1256 808 1482 727", "M988 -80 C890 96 1180 121 1103 300 S1296 464 1150 642 S1330 827 1550 770", "M1075 -80 C990 95 1260 158 1193 339 S1387 505 1241 688 S1400 853 1610 815"],
  process: ["M-100 500 C121 328 281 553 458 397 S736 202 885 358 S1144 491 1324 311 S1575 149 1740 278", "M-100 570 C145 401 327 620 513 463 S781 273 938 429 S1199 564 1376 380 S1600 225 1740 344"],
  dark: ["M-80 502 C89 335 223 588 421 432 S706 214 851 373 S1138 539 1300 340 S1548 180 1710 281", "M-80 575 C104 407 276 667 482 504 S757 288 909 446 S1191 611 1360 408 S1578 250 1710 349", "M-80 644 C125 474 323 726 538 570 S815 359 968 514 S1248 677 1420 478 S1617 323 1710 416"],
  footer: ["M-90 265 C137 134 266 382 474 244 S757 69 920 219 S1227 358 1418 194 S1589 123 1720 169"],
};

/** Low-contrast contour plate, kept behind real section content. */
export function MaterialField({ variant = "bridge", className }: MaterialFieldProps) {
  return (
    <div className={cn("material-field", `material-field--${variant}`, className)} aria-hidden="true">
      <svg viewBox="0 0 1600 800" preserveAspectRatio="none" className="material-field__contours">
        {contourSets[variant].map((d, index) => <path key={d} d={d} className={index === 0 ? "material-field__path material-field__path--lead" : "material-field__path"} />)}
      </svg>
      <span className="material-field__cross material-field__cross--a" />
      <span className="material-field__cross material-field__cross--b" />
    </div>
  );
}
