import React from "react";
import { pages, geos } from "./pages";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import "./pages.css";
import "./media.css";

export const Page = React.memo((props) => {
  const page = pages();
  const geo = geos();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="container">
      <div
        ref={ref}
        className={inView ? "page fade-bottom" : "page"}
        style={{ backgroundImage: `url(${page})` }}
      >
        <div className="sacredGeo" style={{ backgroundImage: `url(${geo})` }} />
        <div className="idNumber">
          <h3>{props.id}</h3>
        </div>

        <div className="title">
          <h2>{props.name}</h2>
          <div className="challenge">
            <h3>{props.meta}</h3>
            <p>CR: {props.Challenge}</p>
          </div>
        </div>

        <div className="pictureContainer grow">
          <LazyLoadImage
            className="picture"
            effect="blur"
            src={props.img_url}
            alt="Picture of a monster"
          />
          <div className="savingThrows">
            <p>Saving Throws: {props["Saving Throws"]}</p>
          </div>
        </div>

        <div className="details grow">
          <p className="grow">Armor Class: {props["Armor Class"]}</p>
          <p className="grow">Hit Points: {props["Hit Points"]}</p>
          <p className="grow">Speed: {props.Speed}</p>
        </div>

        <div className="content">
          <div className="stats grow">
            <ul>
              <li className="grow">
                <p>
                  STR: {props.STR} - {props.STR_mod}
                </p>
              </li>
              <li className="grow">
                <p>
                  DEX: {props.DEX} - {props.DEX_mod}
                </p>
              </li>
              <li className="grow">
                <p>
                  CON: {props.CON} - {props.CON_mod}
                </p>
              </li>
              <li className="grow">
                <p>
                  INT: {props.INT} - {props.INT_mod}
                </p>
              </li>
              <li className="grow">
                <p>
                  WIS: {props.WIS} - {props.WIS_mod}
                </p>
              </li>
              <li className="grow">
                <p>
                  CHA: {props.CHA} - {props.CHA_mod}
                </p>
              </li>
            </ul>
          </div>
          <div className="body grow">
            <ul className="abilities">
              <h3>Ablilities</h3>
              <li>
                <p>Languages: {props.Languages}</p>
              </li>
              <li>
                <p>Senses: {props.Senses}</p>
              </li>
              <li>
                <p>Skills: {props.Skills}</p>
              </li>
            </ul>
            <h3>Traits</h3>
            <div
              className="text"
              id="traits"
              dangerouslySetInnerHTML={{ __html: props.Traits }}
            ></div>
            <h3>Actions</h3>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: props.Actions }}
            ></div>
            <h3>Legendary Actions</h3>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: props["Legendary Actions"] }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
});
