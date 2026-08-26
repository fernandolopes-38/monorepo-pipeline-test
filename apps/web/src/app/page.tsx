"use client"
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Paragraph } from "@/components/ui/Paragraph";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const [state, setState] = useState(false);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://www-sta.deco.proteste.pt/-/media/edideco/images/configuration/mobileportal/headerconfigurationv2/logo-decoproteste-saber-e-poder-2025.svg?rev=66acd87a-1fae-41fb-80a0-0be7bf5abf59&la=pt-PT&h=66&mw=300&w=300&hash=2158BF292FAA002EBFBFD6AD17EF092C"
          alt="Turborepo logo"
          width={180}
          height={38}
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>DEPLOY!!!!!!!!!!!!!!!!!!!</li>
          <li>ENV: {process.env.NEXT_PUBLIC_ENVIROMENT}</li>
        </ol>

        <div className={styles.ctas}>
          <Paragraph>TOGGLE state</Paragraph>
          <Button variant="destructive" onClick={() => setState((currentState) => !currentState)}>{state ? "Sim" : "Não"}</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://turborepo.dev?utm_source=create-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to turborepo.dev →
        </a>
      </footer>
    </div>
  );
}
