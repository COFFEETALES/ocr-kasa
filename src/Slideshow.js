/* vim: set tabstop=2 softtabstop=0 expandtab shiftwidth=2 smarttab : */
import { useState } from 'react';

import './Slideshow.scss';

export default function Slideshow({ images }) {
  const [current, setCurrent] = useState({value: 0, direction: 0});
  const [isPaused, setIsPaused] = useState(true);

  const prev = (images.length + current.value - 1) % images.length;
  const next = (images.length + current.value + 1) % images.length;

  return (
    <div className="slideshow">
      {
        images.map(
          (src, index) => (
            <img
              alt=""
              className={
                index === current.value ? 'slideshow-active' : (
                  index === next ? 'slideshow-next' : (
                    index === prev ? 'slideshow-prev' : null
                  )
                )
              }
              style={
                {
                  zIndex: (
                    index === current.value ? 99 : (
                      current.direction === +1 && index === prev ? 99 : (
                        current.direction === -1 && index === next ? 99 : 0
                      )
                    )
                  )
                }
              }
              key={src}
              src={src}
              onTransitionEnd={
                index === current.value ? (
                  e => {
                    setIsPaused(true);
                  }
                ) : null
              }
            />
          )
        )
      }
      {
        images.length > 1 && (
          <>
            <button
              onClick={
                () => {
                  if (!isPaused) { return; }
                  setIsPaused(false);
                  setCurrent({value: prev, direction: -1});
                }
              }
            ></button>
            <button
              onClick={
                () => {
                  if (!isPaused) { return; }
                  setIsPaused(false);
                  setCurrent({value: next, direction: +1});
                }
              }
            ></button>
            <div>
              {current.value + 1} / {images.length}
            </div>
          </>
        )
      }
    </div>
  );
};

