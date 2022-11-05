import style from "./styles.module.scss";

interface IHeroProps {
  title?: string;
  children: React.ReactNode;
}

export function Hero({ title, children }: IHeroProps) {
  return (
    <section className={style.hero}>
      <div className={style.heroTitle}>{title}</div>

      <div className={style.content}>{children}</div>
    </section>
  );
}
