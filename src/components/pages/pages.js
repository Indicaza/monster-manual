import page1 from "./imgs/paper1.png";
import page2 from "./imgs/paper2.png";
import page5 from "./imgs/paper5.png";
import page6 from "./imgs/paper6.png";
import geo1 from "./imgs/01.png";
import geo2 from "./imgs/02.png";
import geo3 from "./imgs/03.png";
import geo4 from "./imgs/04.png";
import geo5 from "./imgs/05.png";
import geo6 from "./imgs/06.png";
import geo7 from "./imgs/07.png";
import geo8 from "./imgs/08.png";
import geo9 from "./imgs/09.png";

export function pages() {
  const pagesArray = [page1, page2, page5, page6];
  const randomIndex = Math.floor(Math.random() * pagesArray.length);
  const page = pagesArray[randomIndex];
  return page;
}

export function geos() {
  const geoArray = [geo1, geo2, geo3, geo4, geo5, geo6, geo7, geo8, geo9];
  const randomGeoIndex = Math.floor(Math.random() * geoArray.length);
  const geo = geoArray[randomGeoIndex];
  return geo;
}
