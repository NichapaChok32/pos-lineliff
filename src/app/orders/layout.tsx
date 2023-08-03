import "../../app/globals.css";
import "../../styles/globals.css";
import "../../styles/pos-icon.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});
export default function OrdersLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className={poppins.className}>{children}</section>;
}
