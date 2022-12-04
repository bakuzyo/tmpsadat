export default {
  name: 'diplome',
  title: 'Diplome',
  type: 'document',
  fields: [
    {
      name: "title",
      title: "title",
      description: "Titre du diplome",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "sommaire",
      title: "Sommaire",
      type: "text",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "competence" } }],
    },
    {
      name: "linkTobuild",
      title: "LinkToBuild",
      type: "url"
    },
  ],
}
