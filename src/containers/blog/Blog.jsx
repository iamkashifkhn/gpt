import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01,blog02,blog03,blog04,blog05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          Alot is happening We are Blogging About it
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article
            imgURL={blog01}
            date="Sep 26, 2022"
            text="GPT and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt__blog-container_groupB">
          <Article
            imgURL={blog02}
            date="Sep 26, 2022"
            text="GPT and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog03}
            date="Sep 26, 2022"
            text="GPT and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog04}
            date="Sep 26, 2022"
            text="GPT and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgURL={blog05}
            date="Sep 26, 2022"
            text="GPT and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
