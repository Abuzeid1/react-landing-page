import React from "react";

function Picture({
  _360,
  _720,
  _1080,
  _1440,
  _1920,
  aspectRatio,
  loading,
  imageClassName,
  pictureClassName,
}) {
  return (
    <picture
      className={pictureClassName ? pictureClassName : ""}
      style={{ aspectRatio }}
    >
      {_360 && <source media="(max-width: 360px)" srcSet={_360?.src} />}
      {_720 && <source media="(max-width: 720px)" srcSet={_720?.src} />}
      {_1080 && <source media="(max-width: 1080px)" srcSet={_1080?.src} />}
      {_1440 && <source media="(max-width: 1440px)" srcSet={_1440?.src} />}

      <img
        loading={loading ? loading : "lazy"}
        height="100%"
        width="100%"
        className={imageClassName ? imageClassName : ""}
        src={_1920.src}
        alt={_1920.alt}
      />
    </picture>
  );
}

export default Picture;
