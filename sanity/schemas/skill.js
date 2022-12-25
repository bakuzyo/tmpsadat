export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Titre de la compétence",
      type: "string",
    },
    {
      name: "Progres",
      title: "Progres",
      type: "number",
      description: "Evaluation de la compétence de 0 à 100%",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
}
