import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="title link">
        <Link as="/" href="/">
          <div>
            <Image
              src="/img/logo/HQHlogo.svg"
              alt="Home Queer Home - logo"
              width={128}
              height={128}
            />
          </div>
        </Link>
        <nav className=" main-nav">
          <div className="col">comic</div>
          <div className="col">archive</div>
          <div className="col">new readers</div>
          <div className="col">about</div>
          <div className="col">store</div>
        </nav>
      </div>

      <style jsx>
        {`
          .title h1 {
            font-size: 48px;
          }
          .link {
            cursor: pointer;
          }

          .main-nav {
            background: orange;
            padding: 12px 0;

            font-family: "FuturaStdBold", Helvetica, Arial;
            font-weight: 700;
            text-transform: uppercase;
          }
        `}
      </style>
    </div>
  );
}
