type ImageProps = {
  imgSrc: string;
  pt: string;
};

export default function CustomImage({ imgSrc, pt }: ImageProps) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
}
