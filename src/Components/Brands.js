const brandImages = [
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-1.18b437219845def7aeab.png",
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-2.490c5c3e543fe5f06e6d.png",
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-3.8d923b385302bd46d64f.png",
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-4.a8f2158a49c20619ab40.png",
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-5.450568b4ec6b777cf364.png",
  "https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/brand-6.880fd85a6502600fb00e.png",
];

export default function Brands() {
  return (
    <div className="brands">
      <h2>Brands</h2>
      <div className="img-brands">
        {brandImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt="" />
        ))}
      </div>
    </div>
  );
}
