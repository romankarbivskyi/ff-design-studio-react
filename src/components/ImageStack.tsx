interface ImageStackProps {
  images?: string[];
}

const ImageStack = ({ images }: ImageStackProps) => {
  return (
    <section className="flex w-full flex-col gap-3.75 px-3.75">
      <img src={images?.[0]} alt="Top Image" className="w-full" />
      <div className="flex flex-col gap-3.75 md:flex-row">
        <img src={images?.[2]} alt="Top Image" className="w-full flex-1" />
        <img src={images?.[1]} alt="Top Image" className="w-full flex-1" />
      </div>
      <img src={images?.[3]} alt="Top Image" className="w-full" />
      <div className="flex flex-col gap-3.75 md:flex-row">
        <img src={images?.[4]} alt="Top Image" className="w-full flex-1" />
        <img src={images?.[5]} alt="Top Image" className="w-full flex-1" />
      </div>
      <img src={images?.[6]} alt="Top Image" className="w-full" />
    </section>
  );
};

export default ImageStack;
