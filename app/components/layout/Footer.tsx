import Image from "next/image"
export default function footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pb-9">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://uk.linkedin.com/in/colin-sinclair-smith-921071195"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="bg-white"
            aria-hidden
            src="/linkedin-brands-solid.svg"
            alt="linkedin icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:colinsinclairsmith2@gmail.com"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          colinsinclairsmith2@gmail.com
        </a>
      </footer>
    )
}