export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "617ee99725c04b081eb6a077",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ro41uuhc",
                  apiId: "9e252cd0-81a3-4ac2-9532-7282f2ab959b",
                },
                {
                  buildHookId: "617ee9978528acc2a195f4fa",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tndrac34",
                  apiId: "bc588b08-8330-430a-8604-f3c06defc292",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/panarican/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tndrac34.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
