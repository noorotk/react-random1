import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  //dq1
  const params = useParams();
  return (
    <Fragment>
      <div>QuoteDetail</div>

      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
