const boxFooterData = [
  {
    main: "SHOP",
    text1: "All Collections",
    text2: "Winter Edication",
    text3: "Discount",
  },
  {
    main: "COMPANY",
    text1: "About Us",
    text2: "Contact",
    text3: "Affiliates",
  },
  {
    main: "SUPPORT",
    text1: "FAQs",
    text2: "Cookie Policy",
    text3: "Terms Of Use",
  },
];

export default function Footer() {
  return (
    <>
      <div className="footer">
        <BoxFooter>
          <img
            className="logo-img"
            src="https://647a9a5d1de3802bb76b0dcc--adorable-panda-b90c31.netlify.app/static/media/fakeStore.9a660ee44c91177dd555.png"
            alt="logo"
          />

          <p>
            Specializes in providing hight-quality, Stylish producst for your
            wardrobe
          </p>
        </BoxFooter>
        {boxFooterData.map((data, index) => (
          <BoxFooter
            key={index}
            main={data.main}
            text1={data.text1}
            text2={data.text2}
            text3={data.text3}
          />
        ))}
        <BoxFooter>
          <h4>PAYMENT METHODS</h4>
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </BoxFooter>
      </div>
      <p className="copy-right">
        Copyright 2023 FashionStore. All Right reserved
      </p>
    </>
  );
}

function BoxFooter({ children, main, text1, text2, text3 }) {
  return (
    <div className="footer-box">
      <h4>{main}</h4>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      {children}
    </div>
  );
}
