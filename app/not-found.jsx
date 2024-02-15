import Link from "next/link"

const NotFound = () => {
    return (
        <>
            <div className="text-red-700 text-2xl"> NotFound</div>
            <Link href={'./'} >Go back</Link>
        </>

    )
}

export default NotFound