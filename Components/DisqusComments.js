import { DiscussionEmbed } from "disqus-react";
import disqusConfig from "../disqusConfig";

const DisqusComments = () => {
  const disqusShortname = "homequeerhome"; // replace with your Disqus shortname

  return (
    <div className="disqus-container">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
