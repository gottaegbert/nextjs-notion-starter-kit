/* eslint-disable react/react-in-jsx-scope */
import dynamic from "next/dynamic";
import styles from './styles.module.css'

export function SplineD() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
  });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-comment-textnodes
    <>

      <h1 className={styles.kaitou}>Welcome to my blog site<br/> Where I share about my life and my belif</h1>
      {/* <h1 className={styles.kaitou}>Where I share about my life and my belif</h1> */}
      <Spline scene="https://prod.spline.design/M9nxS20DvmoEH9BQ/scene.splinecode"
        // eslint-disable-next-line react/react-in-jsx-scope
        className={styles.three} />

    </>
  );
}
