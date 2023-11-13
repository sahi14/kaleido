/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import "../../css/prism.css";
import Prism from "prismjs";
import Result from "./1";
import "./1.css";

const Code = () => {
    const colorizeCodeSnippet = () => {
        Prism.highlightAll();
    
        const getTab = document.getElementsByClassName("tab-list-item");
        const getTabList = document.getElementsByClassName("tabs");
        const uprDiv = document.getElementsByClassName("page-header");
        for (let i = 0; i < getTab.length; i++) {
          getTab[i].addEventListener("click", () => {
            if (uprDiv[0].clientHeight < 217) {
              getTabList[0].scrollIntoView();
              window.scrollTo(0, 30);
            }
          });
        }
      };
      useEffect(() => {
        colorizeCodeSnippet();
      });
  return (
    <>
    <div className="absolute w-full py-8">
      <Result/>
    
    </div>
   
    <div className="mt-[35%] grid grid-cols-2 px-32 py-20 gap-12">
    
      <div className="">
      React.jsx
        <pre className="code language-js">
          <code>
            {`import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import logo from "../../../assets/gsap_components/logo.png";

export default function Hero() {
const containerRef = useRef(null);
const layouts = ["final", "plain", "columns", "grid"];
const curLayoutRef = useRef(0);

useEffect(() => {
  gsap.registerPlugin(Flip);

  const nextState = () => {
    const container = containerRef.current;
    const state = Flip.getState(".letter, .for, .gsap", {
      props: "color,backgroundolor",
      simple: true,
    });

    container.classList.remove(layouts[curLayoutRef.current]);
    curLayoutRef.current = (curLayoutRef.current + 1) %
    layouts.length;
    container.classList.add(layouts[curLayoutRef.current]);

    Flip.from(state, {
      absolute: true,
      stagger: 0.07,
      duration: 0.7,
      ease: "power2.inOut",
      spin: curLayoutRef.current === 0,
      simple: true,
      onEnter: (elements, animation) =>
        gsap.fromTo(
          elements,
          { opacity: 0 },
          { opacity: 1, delay: animation.duration() - 0.1 },
        ),
      onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
    });

    if (curLayoutRef.current !== 0) {
      gsap.delayedCall(1.5, nextState);
    }
  };

  gsap.delayedCall(1, nextState);
}, []);
return (
  <>
    <div
      ref={containerRef}
      className={(backtick_character) container
      (dollar_sign){layouts[curLayoutRef.current]}
       (backtick_character)}
    >
      <div className="letter A">A</div>
      <div className="letter L">L</div>
      <div className="letter P">P</div>
      <div className="for">Media</div>
      <img src={logo} className="w-40 gsap" />
    </div>
  </>
);
}
`}
          </code>
        </pre>
      </div>
      <div>
      Style.css
        <pre className="code language-js">
          <code>
            {`  body {
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.container.grid, .container.columns {
  align-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;
}

.letter {
  text-align: center;
  color: white;
  font-size: 10vmax;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
}
.container.grid .letter {
  flex-basis: 50%;
}
.container.columns .letter {
  flex-basis: 25%;
}
.for, .gsap {
  font-size: 5vmax;
  color: var(--color-surface-white);
}
.for {
  padding: 2px 1.6vmax;
  font-weight: 300;
  display: none;
}
.gsap {
  padding: 2px 0;
  font-weight: 600;
  display: none;
}
.container.final .for, .container.final .gsap {
  display: block;
}
.A {
  background: rgb(101, 157, 17);
}
.L {
  background: rgb(170, 111, 3);
}
.P {
   background: rgb(86, 3, 86);
}

.container.plain .letter {
  background: transparent;
  color: var(--color-surface-white);
  padding: 0;
}

.logo {
  position: fixed;
  width: 100px;
  bottom: 20px;
  right: 30px;
}
`}
          </code>
        </pre>
      </div>
    </div>
  </>
  )
}


export default Code;