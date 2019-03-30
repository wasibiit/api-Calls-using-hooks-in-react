import React from "react";
import Card from "@material-ui/core/Card";

const Cards = props => {
  return (
    <div>
      <Card className="card">
        <img src={props.username.avatar_url} alt="I'm Avatar" />
        <dl>
          <dt>Name</dt>
          <dd>{props.username.name}</dd>

          <dt>Location</dt>
          <dd>{props.username.location}</dd>

          <dt>Number Of Public Repos</dt>
          <dd>{props.username.public_repos}</dd>

          <dt>Number Of Public Gists</dt>
          <dd>{props.username.public_gists}</dd>

          <dt>Number Of Followers</dt>
          <dd>{props.username.followers}</dd>

          <dt>Number Of Followings</dt>
          <dd>{props.username.following}</dd>

          <dt>Type</dt>
          <dd>{props.username.type}</dd>
        </dl>
      </Card>
    </div>
  );
};

export default Cards;
