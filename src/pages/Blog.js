import React from "react";
import { Row, Col } from "antd";
import { withRouter, useParams } from "react-router-dom";
import PostsList from "../components/Web/Blog/PostsList/PostsList";
import PostInfo from "../components/Web/Blog/PostInfo/PostInfo";

const Blog = ({ location, history }) => {
  const { url } = useParams();

  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        {url ? (
          <PostInfo url={url}/>
        ) : (
          <PostsList location={location} history={history} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  );
};

export default withRouter(Blog);
