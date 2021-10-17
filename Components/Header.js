import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div>
        <div className="title link row">
          <div className="col-4 col-md-1"></div>
          <Link as="/" href="/">
            <div className="col-8 col-md-11">
              <Image
                src="/img/logo/HQHlogo.svg"
                alt="Home Queer Home - logo"
                width={128}
                height={128}
              />
            </div>
          </Link>
        </div>
        <nav className="row">
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
        `}
      </style>
    </div>
  );
}
