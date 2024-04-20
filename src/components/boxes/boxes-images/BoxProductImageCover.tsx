type Props = {
  photoFilename: string;
  photoAlt: string;
};

export default function BoxProductImageCover({ photoFilename = '', photoAlt = '' }: Props) {
  return (
    <div className="flex size-[94px] flex-col justify-center bg-perano-300 md:size-[120px] lg:size-[135px]">
      <img src={`/product-assets/${photoFilename}`} alt={photoAlt} className="object-contain" />
    </div>
  );
}
