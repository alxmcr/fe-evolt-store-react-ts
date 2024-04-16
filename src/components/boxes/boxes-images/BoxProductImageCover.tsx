type Props = {
  photoSource: string;
  photoFilename: string;
  photoAlt: string;
};

export default function BoxProductImageCover({ photoSource = '', photoFilename = '', photoAlt = '' }: Props) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex size-[100px] flex-col justify-center bg-perano-300 md:size-[120px] lg:size-[135px]">
        <img src={`/product-assets/${photoFilename}`} alt={photoAlt} className="object-contain" />
      </div>
      <span className="text-right text-[.5rem] text-perano-300">
        Designed by <a href="#">{photoSource}</a>
      </span>
    </div>
  );
}
