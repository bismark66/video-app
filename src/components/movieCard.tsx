/** @format */

import React from "react";
import { Card } from "antd";

const { Meta } = Card;
interface Props {
  url: string;
  title?: string;
  view?: number;
}

function MovieCard({ url, title, view }: Props) {
  let views;
  if (view) {
    views = Math.ceil(+view);
  }

  function truncateTitle(title: string) {
    let maxLength = 20;
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  }

  return (
    <>
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={<img alt={title} src={url} height={220} />}
      >
        {title && (
          <Meta
            title={<h3 style={{ textWrap: "wrap" }}>{truncateTitle(title)}</h3>}
            description={<h4>Views: {views}</h4>}
          />
        )}
      </Card>
    </>
  );
}

export default MovieCard;
