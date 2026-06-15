const BLOG_CONFIG = {
  title: "Seyed",
  subtitle: "نوشته‌ها",
  language: "fa",
  author: "seyed",

  profile: {
    name: "seyed",
    bio: "Economist Programmer",
    avatar: "https://avatars.githubusercontent.com/u/293959093",
    links: [
      { label: "GitHub", url: "https://github.com/seyedisu", icon: "github" },
      { label: "Instagram", url: "https://instagram.com/this.is.seyed.parsa", icon: "instagram" },
      { label: "ble", url: "https://ble.ir/seyedisu", icon: "ble" }
    ]
  },

  postsPerPage: 5,

  get categories() {
    const cats = new Set(this.posts.map(p => p.category).filter(Boolean));
    return ["همه", ...cats];
  },

  posts: [




    
    // {
    //   id: 0,
    //   title: "",
    //   date: "",
    //   category: "",
    //   pages: [
    //     ``,
    //     ``,
    //   ]
    // },
  ]
};
