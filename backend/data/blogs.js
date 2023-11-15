const blogs = [
  {
    user: "6555004ad73a69d14a8b96e9",
    title: "The Great Gatsby",
    description:
      "The Great Gatsby is a novel written by F. Scott Fitzgerald. It tells the story of Jay Gatsby, a wealthy and mysterious man, and his pursuit of the American Dream in the decadent 1920s.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere vel lorem sit amet vehicula. Integer sed porttitor nisl. Sed non nunc porttitor, gravida eros at, iaculis quam. Fusce commodo et nunc vitae sodales. Mauris suscipit ligula nec molestie rutrum. Cras quis sodales elit. Aenean ac tincidunt justo. Nam porta, enim non auctor semper, nibh orci efficitur odio, id volutpat augue diam venenatis risus. Nullam ligula sapien, suscipit et sapien at, molestie suscipit eros. Proin neque lacus, efficitur in varius id, placerat non justo. Integer nec sem dui. Phasellus ullamcorper nulla quis dolor pretium, ut blandit arcu placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec dictum augue. Mauris hendrerit vehicula aliquet. Quisque elementum dolor ac enim ultrices imperdiet.",
    categories: ["Fiction", "Classic"],
    tags: ["1920s", "American Dream", "Romance", "Tragedy"],
    image: "/uploads/blogs/first.jpg",
    likes: ["6555004ad73a69d14a8b96ea", "6555004ad73a69d14a8b96e9"],
    comments: [
      {
        user: "6555004ad73a69d14a8b96ea",
        details: "The ending was so heartbreaking. It stayed with me for days.",
        likes: ["6555004ad73a69d14a8b96e9", "6555004ad73a69d14a8b96ea"],
      },
    ],
  },

  {
    user: "6555004ad73a69d14a8b96ea",
    title: "Harry Potter and the Sorcerer's Stone",
    description:
      "Harry Potter and the Sorcerer's Stone is the first book in the Harry Potter series by J.K. Rowling. It follows the magical journey of Harry Potter as he discovers his true identity and attends Hogwarts School of Witchcraft and Wizardry. Vestibulum iaculis sapien vitae ultricies aliquet. Nam id risus finibus felis fermentum interdum. Ut vehicula justo eget justo vulputate sodales. Maecenas facilisis eros a diam placerat, in pretium ante aliquet. Suspendisse id aliquet arcu. Integer gravida eu nisl quis rhoncus. Vestibulum convallis, tellus eleifend facilisis mattis, turpis nisl luctus mi, cursus euismod dolor sem in mi. Suspendisse sit amet dignissim orci.",
    categories: ["Fantasy", "Young Adult"],
    tags: ["Magic", "Friendship", "Adventure"],
    image: "/uploads/blogs/second.jpg",
    likes: ["6555004ad73a69d14a8b96e9"],
    comments: [
      {
        user: "6555004ad73a69d14a8b96e9",
        details:
          "I grew up reading Harry Potter and it will always hold a special place in my heart.",
        likes: ["6555004ad73a69d14a8b96ea", "6555004ad73a69d14a8b96e9"],
      },
    ],
  },

  {
    user: "6555004ad73a69d14a8b96e9",
    title: "To Kill a Mockingbird",
    description:
      "To Kill a Mockingbird is a classic novel by Harper Lee. Set in the Deep South during the 1930s, it explores themes of racial injustice, prejudice, and moral courage through the eyes of Scout Finch.Fusce commodo a nulla a tincidunt. Donec condimentum mi dapibus enim pretium, at accumsan odio consequat. Praesent vitae nulla magna. Etiam imperdiet consequat lacus, iaculis tempus elit varius vitae. Suspendisse maximus venenatis purus, nec porta dui aliquam sed. Proin condimentum ex ac felis tincidunt tincidunt. Cras viverra, arcu id auctor dapibus, justo sapien malesuada tortor, eu auctor metus magna ut nibh. Fusce vehicula ex et nulla dignissim tempus. Praesent eu velit ut diam bibendum pharetra. Maecenas condimentum efficitur neque, quis dignissim nunc condimentum at. In tristique facilisis leo, nec sodales odio congue nec. Nullam interdum lacus nec neque consectetur, in pulvinar nulla dapibus. Vestibulum lacinia tellus erat, vitae sollicitudin odio tristique non. Pellentesque quis mollis tortor.",
    categories: ["Fiction", "Classic", "Social Issues"],
    tags: ["Racism", "Coming of Age", "Southern Literature"],
    image: "/uploads/blogs/third.jpg",
    likes: ["6555004ad73a69d14a8b96ea"],
    comments: [
      {
        user: "6555004ad73a69d14a8b96ea",
        details:
          "The character of Atticus Finch is one of my all-time favorites.",
        likes: ["6555004ad73a69d14a8b96e9"],
      },
      {
        user: "6555004ad73a69d14a8b96e9",
        details:
          "The writing is so beautiful and evocative. It really transports you to that time and place.",
        likes: ["6555004ad73a69d14a8b96ea"],
      },
    ],
  },
];

export default blogs;
