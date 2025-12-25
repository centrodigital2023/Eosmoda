import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eosmoda - Fashion E-commerce</title>
        <meta name="description" content="Eosmoda - Your Fashion Destination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <span className={styles.brand}>Eosmoda</span>
        </h1>

        <p className={styles.description}>
          Tu destino de moda en línea
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Nuevas Colecciones &rarr;</h2>
            <p>Descubre las últimas tendencias en moda</p>
          </div>

          <div className={styles.card}>
            <h2>Ofertas Especiales &rarr;</h2>
            <p>Encuentra las mejores ofertas del momento</p>
          </div>

          <div className={styles.card}>
            <h2>Envío Gratis &rarr;</h2>
            <p>En compras superiores a $50</p>
          </div>

          <div className={styles.card}>
            <h2>Atención al Cliente &rarr;</h2>
            <p>Estamos aquí para ayudarte 24/7</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Eosmoda - Todos los derechos reservados</p>
      </footer>
    </div>
  )
}
