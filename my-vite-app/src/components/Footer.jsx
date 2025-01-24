import footer from "../assets/footer.png";
import footer2 from "../assets/footer2.png";

console.log("Footer image path:", footer);
console.log("Footer2 image path:", footer2);

export default function Footer() {
  return <img src={footer} alt="footer" id="footer" />;
}
export function Footer2() {
  return <img src={footer2} alt="footer" id="footer" />;
}
