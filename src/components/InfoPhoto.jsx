export default function InfoPhoto(infoPhoto) {
  return (
    <aside className="pt-12 w-11/12 mx-auto">
     <h2 className="text-4xl">{infoPhoto.actualImage?.location}</h2>
     <p>{infoPhoto.actualImage?.description}</p>
    </aside>
  );
}
