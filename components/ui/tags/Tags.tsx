import { FC } from "react";
import styles from "./tags.module.css";

type TagsProps = {
  tags?: string[];
  className?: string;
}

export const Tags: FC<TagsProps> = ({tags, className}) => {
  return (
    <div className={`${styles.types} ${className}`}>
      {tags && tags.length > 0 ? (
        tags.map((type: string) => (
            <span key={type} className={styles.type} data-project-type={type}>{type}</span>
          ))
      ) : (
        <span className="text-gray-500">No tags available</span>
      )}
    </div>
  );
}
