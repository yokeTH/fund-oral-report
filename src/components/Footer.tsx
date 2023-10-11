import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <aside>
        <div>
          <span>
            © 2023 <a href="https://fund-oral.xyz">fund-oral.xyz</a> • Created
            by <a href="https://github.com/yokeTH">yokeTH </a> •{" "}
            <a href="https://github.com/yokeTH/fund-oral-report" className="">
              <Image
                priority
                className="inline"
                src="/github.svg"
                height={14}
                width={14}
                alt="Github repository"
              />
            </a>
          </span>
        </div>
      </aside>
    </footer>
  );
}
