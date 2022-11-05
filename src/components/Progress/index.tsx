import LoadWrapper from "../Layout";
import style from "./styles.module.scss";

interface IProgressProps {
  progressPercentage: number;
}

export function Progress({ progressPercentage = 50 }: IProgressProps) {
  
  return (
    <>
      <div className={style.progressBar}>
        <div
          id={style.progress}
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
    </>
  );
}
