export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, titlefa, description, descriptionfa, date } = post.metadata
  const content = post.default

  return {
    content,
    title,
    titlefa,
    description,
    descriptionfa,
    date,
  }
}
