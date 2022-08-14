import React from "react";

function Picture({
  _360,
  _720,
  _1080,
  _1440,
  _1920,
  imageClassName,
  pictureClassName,
}) {
  return (
    <picture className={pictureClassName ? pictureClassName : ""}>
      {_360 && (
        <source
          media="(max-width: 360px)"
          srcSet={_360?.src}
          width={_360?.imageWidth}
        />
      )}
      {_720 && (
        <source
          media="(max-width: 720px)"
          srcSet={_720?.src}
          width={_720?.imageWidth}
        />
      )}
      {_1080 && (
        <source
          media="(max-width: 1080px)"
          srcSet={_1080?.src}
          width={_1080?.imageWidth}
        />
      )}
      {_1440 && (
        <source
          media="(max-width: 1440px)"
          srcSet={_1440?.src}
          width={_1440?.imageWidth}
        />
      )}

      <img
        loading="lazy"
        width={_1920.imageWidth}
        className={imageClassName ? imageClassName : ""}
        src={_1920.src}
        alt={_1920.alt}
      />
    </picture>
  );
}

export default Picture;
