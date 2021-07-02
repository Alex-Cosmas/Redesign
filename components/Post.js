import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <div className='overflow-hidden rounded-tl-md rounded-tr-md'>
        <img
          src={post.frontmatter.cover_image}
          alt=''
          className=' h-32 object-cover w-full'
        />
      </div>

      {/* <div className='post-date'>Posted on {post.frontmatter.date}</div> */}

      <div className='p-4'>
        <h3 className='text-2xl'>{post.frontmatter.title}</h3>

        <p>{post.frontmatter.excerpt}</p>

        <Link href={`/blog/${post.slug}`}>
          <a className='btn'>Read More</a>
        </Link>
      </div>
    </div>
  )
}
