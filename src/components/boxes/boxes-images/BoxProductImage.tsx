type Props = {
  photoSource: string;
  photoFilename: string;
  photoAlt: string;
};

export default function BoxProductImage({
  photoSource = '',
  photoFilename = '',
  photoAlt = '',
}: Props) {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="flex h-[7.75rem] flex-col justify-center bg-perano-100 md:h-[12.75rem] lg:h-[16.75rem]">
        <img src={`/product-assets/${photoFilename}`} alt={photoAlt} className="object-contain" />
      </div>
      <span className="text-right text-[.5rem] text-perano-300">
        Designed by <a href="#">{photoSource}</a>
      </span>
    </div>
  );
}
