type Props = {
  photoFilename: string;
  photoAlt: string;
};

export default function BoxProductImage({
  photoFilename = '',
  photoAlt = '',
}: Props) {
  return (
    <div className="h-[9.5rem] w-[9.75rem]">
      <div className="bg-perano-100">
        <img src={`/product-assets/${photoFilename}`} alt={photoAlt} />
      </div>
      <span className="text-sm">
        Designed by <a href="#">Freepik</a>
      </span>
    </div>
  );
}
