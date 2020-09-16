import * as React from "react";
import "./github-markdown.css";

interface IProps {
  html: string;
}

const ArticleWrapper: React.FC<IProps> = (props) => {
  return <div className="markdown-body">{props.html}</div>;
};

export { ArticleWrapper };
