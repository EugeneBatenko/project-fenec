import { FC } from "react";
import { TagTypes } from "@/types";
import styles from "./tags.module.css";

type TagsProps = {
  tags?: TagTypes[];
  className?: string;
}

export const Tags: FC<TagsProps> = ({tags, className}) => {
  return (
    <div className={`${styles.types} ${className}`}>
      {tags && tags.length > 0 ? (
        tags.map((tag) => (
            <span key={tag.name} className={styles.type} data-project-type={tag.name}>{tag.name}</span>
          ))
      ) : (
        <span className="text-gray-500">No tags available</span>
      )}
    </div>
  );
}
