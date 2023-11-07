/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [btnOne, setBtnOne] = useState(false);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnThree, setBtnThree] = useState(false);

  return (
    <div className="mx-auto max-w-screen-xl px-4">
       <Helmet>
        <title>FoodFlow | Blog</title>
      </Helmet>
      {/* Blog 1 */}
      <div className="mx-auto max-w-screen-lg">
        <img
          className="mx-auto  w-full object-cover"
          src="https://2.bp.blogspot.com/-DwEpDpdtrb0/VUrqOSxWdxI/AAAAAAAAFjU/-SSVacRPuvI/s1600/one-way%2Bdata-%2Bbinding%2Bin%2Bangular%2B1.png"
          alt=""
        />
        <h1 className="text-3xl py-5 font-bold">
          What is One way data binding?
        </h1>
        <p className="text-dark ">
          One-way data binding is a concept in software development and web
          application frameworks that describes the unidirectional flow of data
          from a source (usually a model or component) to a destination
          (typically a view or UI component). In this approach, data changes in
          the source automatically update the destination, but changes in the
          destination do not affect the source. One-way data binding is a key
          concept in many modern web frameworks, including Angular, React, and
          Vue.js.{" "} <br />
          <button 
            onClick={() => setBtnOne(!btnOne)}
            className="btn btn-sm bg-mainColor text-light hover:bg-mainColor"
          >
            See more
          </button>
        </p>{" "}
        <br />
        <span className={btnOne ? "block" : "hidden"}>
          {" "}
          <b>Data Source (Model or Component):</b> This is where your
          application data is stored or managed. It can be a database, an API,
          or a state management system, depending on the technology you are
          using. <br /> <br />
          <b>UI Component (View):</b> This is the part of your application
          responsible for displaying data to the user. It could be a web page, a
          mobile app screen, or any other form of user interface. <br /> <br />
          <b>Binding:</b> One-way data binding is established through a binding
          mechanism that connects the data source to the UI component. The UI
          component subscribes to changes in the data source. <br /> <br />
          <b>Data Updates:</b> When the data in the source changes, it triggers
          updates in the connected UI component. This is often automatic and
          reactive, meaning you don't need to manually update the UI when the
          data changes
          <br /> <br />
          <b>Reactivity:</b>UI components update automatically when the source
          data changes, providing a responsive user experience.
        </span>
      </div>
      {/* Blog 2 */}
      <div className="mx-auto max-w-screen-lg my-20">
        <img
          className="mx-auto  w-full object-cover"
          src="https://www.codewithc.com/wp-content/uploads/2017/04/What-is-NPM-in-Node.-Js.jpg.jpg"
          alt=""
        />
        <h1 className="text-3xl py-5 font-bold">What is NPM in node.js?</h1>
        <p className="text-dark ">
        NPM (Node Package Manager) is a package manager and dependency management tool for Node.js, which is a runtime environment for executing JavaScript code on the server-side. NPM is the default package manager for Node.js, and it plays a central role in managing JavaScript packages and libraries <br />
           <button
            onClick={() => setBtnTwo(!btnTwo)}
            className="btn btn-sm bg-mainColor text-light hover:bg-mainColor"
          >
            See more
          </button>
        </p>{" "}
        <br />
        <span className={btnTwo ? "block" : "hidden"}>
          <b>Package Management</b>: NPM allows developers to easily install,
          update, and remove packages (also known as modules or libraries) in
          their Node.js projects. These packages can be either code libraries,
          utilities, or tools created by other developers. <br /> <br />
          <b>Dependency Management:</b> NPM helps manage project dependencies.
          It keeps track of the packages that your project relies on and their
          versions. It generates a package.json file that lists these
          dependencies, making it easy for other developers to replicate your
          project's environment.
          <br /> <br />
          <b>Version Control:</b> NPM enforces semantic versioning (SemVer) for
          packages. This means you can specify version ranges for your project's
          dependencies, ensuring compatibility and avoiding potential issues
          caused by version mismatches. <br /> <br />
          <b>Global and Local Packages:</b> NPM supports both global and local
          installations of packages. Global packages are installed system-wide
          and can be accessed from the command line, while local packages are
          specific to your project.
          <br /> <br />
          <b>Scripts:</b> NPM allows you to define and run custom scripts in
          your project. Common scripts include starting your application,
          running tests, and building your project. You can define these scripts
          in your package.json file.
        </span>
      </div>
      {/* Blog 3 */}
      <div className="mx-auto max-w-screen-lg my-20">
        <img
          className="mx-auto  w-full object-cover"
          src="https://media.licdn.com/dms/image/D5612AQEfsQGvLrRncw/article-cover_image-shrink_720_1280/0/1682672808736?e=2147483647&v=beta&t=okdtAQZtAPf_jrYvcgTq2ujHTuiosDMvvtEXvSc-EP8"
          alt=""
        />
        <h1 className="text-3xl py-5 font-bold">
          Different between Mongodb database vs mySQL database.
        </h1>
        <p className="text-dark ">
          MySQL is a relational database system that stores data in a structured
          tabular format. In contrast, MongoDB stores data as JSON documents in
          a more flexible format. Both offer performance and scalability, but
          they give better performance for different use cases.{" "} <br />
          <button
            onClick={() => setBtnThree(!btnThree)}
            className="btn btn-sm bg-mainColor text-light hover:bg-mainColor"
          >
            See more
          </button>
        </p>{" "}
        <br />
        <span className={btnThree ? "block" : "hidden"}>
          <h1 className="text-xl font-bold">MongoDB:</h1>
          <li className="text-dark mt-3">
            Think of MongoDB like a big box where you can throw in different
            things (documents) without worrying much about how they are
            organized.
          </li>
          <li className="text-dark mt-3">
            It's great for handling data that doesn't fit neatly into tables,
            like social media posts, product catalogs, or sensor data.
          </li>
          <li className="text-dark mt-3">
            It can easily handle lots of data and can be spread across multiple
            machines for high performance.
          </li>
          <br /> <br />
          <h1 className="text-xl font-bold">MySQL:</h1>
          <li className="text-dark mt-3">
            MySQL is like a well-organized library. It wants you to put data
            into specific tables with clear rows and columns.
          </li>
          <li className="text-dark mt-3">
            It's best when you have structured data like user accounts,
            financial transactions, or product catalogs.
          </li>
          <li className="text-dark mt-3">
            It's good for applications where data accuracy and consistency are
            crucial.
          </li>
        </span>
      </div>
    </div>
  );
};

export default Blog;
