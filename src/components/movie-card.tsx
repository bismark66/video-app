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
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={url} height={220} />}
      >
        {title && (
          <Meta title={<h3>{title}</h3>} description={`Views:${view}`} />
        )}
      </Card>
    </>
  );
}

export default MovieCard;
