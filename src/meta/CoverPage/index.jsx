import React from "react";
import njuLogo from "../../assets/images/nju.png";
import lamdaLogo from "../../assets/images/lamda.png";
import njuBottomLogo from "../../assets/images/nju-bottom.png";

function CoverPage({ title, titleSize=8, author, authorSize=1.5, ...props }) {
  return (
    <section className="h-full" {...props}>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="my-0 mx-5" style={{
          fontSize: `${titleSize}rem`,
        }}>
          {title}
        </h1>
        <h2 className="m-0" style={{
          fontSize: `${authorSize}em`,
        }}>
          {author}
        </h2>

        <h3 className="text-lg m-0">
          {new Date().toLocaleDateString()}
        </h3>

        <img className="absolute left-6 top-6 w-[200px]" src={njuLogo} alt="nju logo" />
        <img className="absolute right-6 top-6 w-[500px]" src={lamdaLogo} alt="lamda logo" />
        <img className="absolute left-0 right-0 bottom-0 w-full" src={njuBottomLogo} alt="nju bottom logo" />
      </div>
    </section>
  )
}

export default CoverPage;
