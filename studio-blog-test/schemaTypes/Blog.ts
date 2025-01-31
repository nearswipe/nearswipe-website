export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Blog title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Blog slug',
      options: {
        source: "title"
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
        name: "content",
        type: "array",
        title: "Content",
        of: [
            {
                type: "block"
            }
        ]
    },
  ],
}
