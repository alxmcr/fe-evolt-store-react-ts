type Props = {
  photoFilename: string;
  photoAlt: string;
};

export default function BoxProductImage({
  photoFilename = '',
  photoAlt = '',
}: Props) {
  return (
    <div className="flex min-h-[9.5rem] w-[9.75rem] flex-col gap-2 px-2">
      <div className="flex min-h-[8.625rem] flex-col justify-center bg-perano-100">
        <img src={`/product-assets/${photoFilename}`} alt={photoAlt} />
      </div>
      <span className="text-sm">
        Designed by <a href="#">Freepik</a>
      </span>
    </div>
  );
}
