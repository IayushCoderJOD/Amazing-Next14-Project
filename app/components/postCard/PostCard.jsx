import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <div className="flex flex-col justify-evenly scroll-mx-0">
            <div className="flex">
                <div className="">
                    <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt="no" fill className="rounded-md shadow-2xl" />
                </div>
                <span className="flex items-center -rotate-90 ">01.01.2024</span>
                {/* {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img} />
                </div>} */}
                {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
            </div>
            {/* <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            </div> */}
            <div className="">
                <h1 className="pt-6">Title</h1>
                <p className=" pt-3 pb-3 font-light text-xs w-[80%] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptatum tempora, commodi cumque officiis adipisci vitae dolor suscipit facere est?</p>
                <Link className="mt-3"
                    href="/blog/post"
                >READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard