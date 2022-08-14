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
      {_360 && (
        <source
          media="(max-width: 360px)"
          srcSet={_360?.src}
          width={`${_360?.imageWidth}px`}
          height={`${_360?.imageWidth / aspectRatio}px`}
        />
      )}
      {_720 && (
        <source
          media="(max-width: 720px)"
          srcSet={_720?.src}
          width={`${_720?.imageWidth}px`}
          height={`${_720?.imageWidth / aspectRatio}px`}
        />
      )}
      {_1080 && (
        <source
          media="(max-width: 1080px)"
          srcSet={_1080?.src}
          width={`${_1080?.imageWidth}px`}
          height={`${_1080?.imageWidth / aspectRatio}px`}
        />
      )}
      {_1440 && (
        <source
          media="(max-width: 1440px)"
          srcSet={_1440?.src}
          width={`${_1440?.imageWidth}px`}
          height={`${_1440?.imageWidth / aspectRatio}px`}
        />
      )}

      <img
        loading={loading ? loading : "lazy"}
        width={`${_1920.imageWidth}px`}
        height={`${_1920?.imageWidth / aspectRatio}px`}
        className={imageClassName ? imageClassName : ""}
        src={_1920.src}
        alt={_1920.alt}
      />
    </picture>
  );
}

export default Picture;
