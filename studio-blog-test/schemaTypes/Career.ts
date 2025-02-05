export default {
  name: 'career',
  type: 'document',
  title: 'Career',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Job title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Job slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'link',
      type: 'string',
      title: 'Job Link',
    },
    {
      name: 'jobType',
      type: 'string',
      title: 'Job Type',
    },
    {
      name: 'jobLocation',
      type: 'string',
      title: 'Job Location',
    },
  ],
}
